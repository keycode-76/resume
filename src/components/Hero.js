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

const Hero = ({onNavigate}) => {
  const handleChallogPress = () => {
    Linking.openURL('https://challog.dollarbasellc.com/');
  };

  return (
    <View style={styles.hero}>
      <View style={styles.heroContent}>
        <View style={styles.leftContent}>
          <Text style={styles.title}>
            <Text style={styles.gradientText}>Building digital</Text>
            {'\n'}
            <Text style={styles.gradientText}>experiences</Text>
          </Text>

          <Text style={styles.description}>
            We craft innovative solutions that help people achieve their goals.
            From productivity tools to lifestyle apps.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => onNavigate && onNavigate('projects')}
              style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>View Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onNavigate && onNavigate('contact')}
              style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Get in Touch</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rightContent}>
          <View style={styles.projectCard}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Challog</Text>
                <Text style={styles.cardSubtitle}>Your Challenge Companion</Text>
              </View>
              <View style={styles.cardIcon}>
                <Text style={styles.iconText}>⚡</Text>
              </View>
            </View>

            <Text style={styles.cardDescription}>
              Track, visualize, and complete your personal or professional
              challenges with an elegant, mobile-first experience. Features
              cloud sync, visual progress tracking, and clean design.
            </Text>

            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Progress Tracking</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Cloud Sync</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Mobile App</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={handleChallogPress}
              style={styles.cardLink}>
              <Text style={styles.cardLinkText}>Visit Challog</Text>
              <Text style={styles.cardLinkArrow}>→</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.projectCard, styles.comingSoonCard]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitleSmall}>
                More projects coming soon
              </Text>
              <View style={styles.cardIcon}>
                <Text style={styles.iconTextSmall}>+</Text>
              </View>
            </View>
            <Text style={styles.comingSoonText}>Stay tuned for our next release</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    minHeight: Dimensions.get('window').height - 100,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
    justifyContent: 'center',
  },
  heroContent: {
    flexDirection: width > 768 ? 'row' : 'column',
    gap: 48,
    alignItems: 'flex-start',
  },
  leftContent: {
    flex: 1,
    maxWidth: width > 768 ? '50%' : '100%',
  },
  title: {
    fontFamily: 'System',
    fontSize: width > 768 ? 80 : 48,
    fontWeight: '700',
    lineHeight: width > 768 ? 88 : 56,
    marginBottom: 24,
    letterSpacing: -1,
  },
  gradientText: {
    color: '#ffffff',
  },
  description: {
    fontSize: width > 768 ? 20 : 18,
    color: '#9ca3af',
    marginBottom: 32,
    lineHeight: 28,
    maxWidth: '90%',
  },
  buttonContainer: {
    flexDirection: width > 400 ? 'row' : 'column',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: 'rgba(253, 253, 253, 0.05)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#9ca3af',
    fontSize: 16,
    fontWeight: '600',
  },
  rightContent: {
    flex: 1,
    width: width > 768 ? 'auto' : '100%',
  },
  projectCard: {
    backgroundColor: 'rgba(253, 253, 253, 0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 24,
    padding: 32,
    marginBottom: 24,
  },
  comingSoonCard: {
    opacity: 0.5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  cardTitleSmall: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 16,
  },
  cardIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 12,
  },
  iconText: {
    fontSize: 24,
    color: '#ffffff',
  },
  iconTextSmall: {
    fontSize: 20,
    color: '#ffffff',
  },
  cardDescription: {
    fontSize: 16,
    color: '#d1d5db',
    lineHeight: 24,
    marginBottom: 24,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: {
    fontSize: 12,
    color: '#9ca3af',
  },
  cardLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLinkText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  cardLinkArrow: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 8,
  },
  comingSoonText: {
    color: '#6b7280',
    fontSize: 14,
  },
});

export default Hero;

