/**
 * Notion API Serverless Function 範例
 * 
 * 此文件提供兩種部署方式的範例：
 * 1. Vercel (api/notion.js)
 * 2. Netlify Functions (netlify/functions/notion.js)
 * 
 * 設置步驟請參考 SETUP_GUIDE.md
 */

// ============================================
// 選項 1: Vercel Function
// 檔案位置: api/notion.js
// ============================================

export default async function handler(req, res) {
  // 只允許 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source, timestamp } = req.body;

  // 驗證 email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // 調用 Notion API
    const response = await fetch(`https://api.notion.com/v1/pages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: {
          database_id: process.env.NOTION_DATABASE_ID,
        },
        properties: {
          Email: {
            title: [
              {
                text: {
                  content: email,
                },
              },
            ],
          },
          Source: {
            rich_text: [
              {
                text: {
                  content: source || 'unknown',
                },
              },
            ],
          },
          Timestamp: {
            date: {
              start: timestamp || new Date().toISOString(),
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to save to Notion');
    }

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Notion API Error:', error);
    return res.status(500).json({ error: error.message });
  }
}

// ============================================
// 選項 2: Netlify Function
// 檔案位置: netlify/functions/notion.js
// ============================================

/*
exports.handler = async (event, context) => {
  // 只允許 POST 請求
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Invalid JSON' }),
    };
  }

  const { email, source, timestamp } = body;

  // 驗證 email
  if (!email || !email.includes('@')) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Invalid email format' }),
    };
  }

  try {
    // 調用 Notion API
    const response = await fetch(`https://api.notion.com/v1/pages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: {
          database_id: process.env.NOTION_DATABASE_ID,
        },
        properties: {
          Email: {
            title: [
              {
                text: {
                  content: email,
                },
              },
            ],
          },
          Source: {
            rich_text: [
              {
                text: {
                  content: source || 'unknown',
                },
              },
            ],
          },
          Timestamp: {
            date: {
              start: timestamp || new Date().toISOString(),
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to save to Notion');
    }

    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error) {
    console.error('Notion API Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
*/
