/**
 * Google Apps Script for Email Form Handler
 * 
 * 使用說明：
 * 1. 前往 Google Sheets，創建一個新的試算表
 * 2. 在第一行添加標題：Email | Source | Timestamp
 * 3. 點擊「擴充功能」→「Apps Script」
 * 4. 將此代碼貼上並儲存
 * 5. 點擊「部署」→「新增部署作業」→「網頁應用程式」
 * 6. 設置執行身分為「我」，存取權限為「所有人」
 * 7. 複製產生的 Web App URL 並更新到 index.html
 */

function doPost(e) {
  try {
    // 確保 e 參數存在
    if (!e) {
      e = {};
    }
    
    // 處理表單數據或 JSON 數據
    let email, source, timestamp;
    let isFormSubmit = false;
    
    // 優先檢查是否為表單提交（URL 編碼）
    if (e.parameter && Object.keys(e.parameter).length > 0) {
      // 表單提交（URL 編碼的表單數據）
      email = e.parameter.email;
      source = e.parameter.source || 'who_is_human';
      timestamp = e.parameter.timestamp || new Date().toISOString();
      isFormSubmit = true;
    } else if (e.postData && e.postData.contents) {
      // 檢查 Content-Type
      const contentType = e.postData.type || '';
      
      // 如果是表單編碼類型，不應該嘗試解析為 JSON
      if (contentType === 'application/x-www-form-urlencoded') {
        // 表單數據，應該已經在 e.parameter 中
        const params = e.parameter || {};
        email = params.email;
        source = params.source || 'who_is_human';
        timestamp = params.timestamp || new Date().toISOString();
        isFormSubmit = true;
      } else {
        // 嘗試解析為 JSON（僅當 Content-Type 是 JSON 時）
        try {
          const data = JSON.parse(e.postData.contents);
          email = data.email;
          source = data.source || 'who_is_human';
          timestamp = data.timestamp || new Date().toISOString();
          isFormSubmit = false; // JSON 請求不是表單提交
        } catch (parseError) {
          // JSON 解析失敗，拋出錯誤
          throw new Error('Invalid JSON format: ' + parseError.toString());
        }
      }
    } else {
      throw new Error('No data received');
    }
    
    // 驗證 email 格式
    if (!email || !email.includes('@')) {
      const errorResponse = { error: 'Invalid email format' };
      if (isFormSubmit) {
        const htmlContent = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>' +
          '<script type="text/javascript">' +
          'try {' +
          '  if (window.parent && window.parent !== window) {' +
          '    window.parent.postMessage(' + JSON.stringify(errorResponse) + ', "*");' +
          '  }' +
          '} catch(e) {}' +
          '</script>' +
          '<p>Error: Invalid email format</p>' +
          '</body></html>';
        return HtmlService.createHtmlOutput(htmlContent)
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      }
      return ContentService.createTextOutput(JSON.stringify(errorResponse))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 獲取試算表
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 確保標題行存在
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Email', 'Source', 'Timestamp']);
    }
    
    // 檢查 email 是否已存在（從第 2 行開始檢查，第 1 行是標題）
    const emailColumn = 1; // Email 在第一欄
    const lastRow = sheet.getLastRow();
    
    if (lastRow > 1) {
      const emails = sheet.getRange(2, emailColumn, lastRow - 1, 1).getValues().flat();
      
      if (emails.includes(email)) {
        const errorResponse = { error: 'This email is already subscribed!' };
        if (isFormSubmit) {
          const htmlContent = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>' +
            '<script type="text/javascript">' +
            'try {' +
            '  if (window.parent && window.parent !== window) {' +
            '    window.parent.postMessage(' + JSON.stringify(errorResponse) + ', "*");' +
            '  }' +
            '} catch(e) {}' +
            '</script>' +
            '<p>Error: This email is already subscribed!</p>' +
            '</body></html>';
          return HtmlService.createHtmlOutput(htmlContent)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
        }
        return ContentService.createTextOutput(JSON.stringify(errorResponse))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // 添加新行
    sheet.appendRow([email, source, timestamp]);
    
    // 返回 HTML 響應（用於表單提交）或 JSON（用於 AJAX）
    const response = {
      success: true,
      message: 'Email saved successfully'
    };
    
    // 根據提交類型返回相應格式
    if (isFormSubmit) {
      // 表單提交，返回 HTML 並通過 postMessage 通知父窗口
      // 使用完整的 HTML 文檔，確保即使重定向也能執行
      const htmlContent = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>' +
        '<script type="text/javascript">' +
        'try {' +
        '  if (window.parent && window.parent !== window) {' +
        '    window.parent.postMessage(' + JSON.stringify(response) + ', "*");' +
        '  } else {' +
        '    console.log("Response:", ' + JSON.stringify(response) + ');' +
        '  }' +
        '} catch(e) {' +
        '  console.error("PostMessage error:", e);' +
        '}' +
        '</script>' +
        '<p>Email saved successfully!</p>' +
        '</body></html>';
      
      return HtmlService.createHtmlOutput(htmlContent)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .setTitle('Success');
    } else {
      // JSON 請求，返回 JSON
      return ContentService.createTextOutput(JSON.stringify(response))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    const errorResponse = {
      error: error.toString()
    };
    
    // 嘗試判斷是否為表單提交（如果 e 存在）
    const isFormSubmit = e && e.parameter;
    
    if (isFormSubmit) {
      const htmlContent = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>' +
        '<script type="text/javascript">' +
        'try {' +
        '  if (window.parent && window.parent !== window) {' +
        '    window.parent.postMessage(' + JSON.stringify(errorResponse) + ', "*");' +
        '  }' +
        '} catch(e) {}' +
        '</script>' +
        '<p>Error: ' + errorResponse.error + '</p>' +
        '</body></html>';
      return HtmlService.createHtmlOutput(htmlContent)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    } else {
      return ContentService.createTextOutput(JSON.stringify(errorResponse))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
}

/**
 * 用於測試的 GET 函數
 * 在瀏覽器中訪問 Web App URL 可以測試是否正常運作
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'Google Sheets API is working!',
      timestamp: new Date().toISOString()
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
