import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

const App = () => {
  const scrollViewRef = useRef(null);

  const handleNavigate = (section) => {
    if (!scrollViewRef.current) return;

    // 使用估算的偏移量進行滾動
    // 這些值可以根據實際內容高度調整
    if (section === 'projects') {
      scrollViewRef.current.scrollTo({
        y: 600, // 估算的 Projects 區域位置
        animated: true,
      });
    } else if (section === 'contact') {
      scrollViewRef.current.scrollTo({
        y: 1400, // 估算的 Contact 區域位置
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <Header onNavigate={handleNavigate} />
        <Hero onNavigate={handleNavigate} />
        <Projects />
        <Contact />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
});

export default App;

