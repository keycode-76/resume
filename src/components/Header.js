import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header = ({onNavigate}) => {
  return (
    <View style={styles.header}>
      <View style={styles.navContainer}>
        <Text style={styles.logo}>
          Dollarbase<Text style={styles.logoSuffix}>.llc</Text>
        </Text>
        <View style={styles.navLinks}>
          <TouchableOpacity
            onPress={() => onNavigate && onNavigate('projects')}
            style={styles.navLink}>
            <Text style={styles.navLinkText}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onNavigate && onNavigate('contact')}
            style={styles.navLink}>
            <Text style={styles.navLinkText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  logoSuffix: {
    color: '#6b7280',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 24,
  },
  navLink: {
    paddingVertical: 4,
  },
  navLinkText: {
    color: '#9ca3af',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Header;

