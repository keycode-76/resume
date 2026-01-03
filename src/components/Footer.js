import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <Text style={styles.copyright}>
          © 2025 Dollarbase LLC. All rights reserved.
        </Text>
        <View style={styles.links}>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Terms</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  container: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    flexDirection: width > 768 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  copyright: {
    color: '#6b7280',
    fontSize: 14,
  },
  links: {
    flexDirection: 'row',
    gap: 24,
  },
  link: {
    paddingVertical: 4,
  },
  linkText: {
    color: '#6b7280',
    fontSize: 14,
  },
});

export default Footer;

