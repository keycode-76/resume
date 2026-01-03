import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const Contact = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:contact@dollarbasellc.com');
  };

  return (
    <View style={styles.contactSection}>
      <View style={styles.container}>
        <Text style={styles.title}>Get in Touch</Text>
        <Text style={styles.subtitle}>
          Have a project in mind? Let's talk about it.
        </Text>
        <TouchableOpacity onPress={handleEmailPress} style={styles.emailButton}>
          <Text style={styles.emailButtonText}>contact@dollarbasellc.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactSection: {
    paddingVertical: 96,
    paddingHorizontal: 24,
  },
  container: {
    maxWidth: 896,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'System',
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 30,
  },
  emailButton: {
    backgroundColor: 'rgba(253, 253, 253, 0.05)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Contact;

