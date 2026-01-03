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

const Projects = () => {
  const handleChallogPress = () => {
    Linking.openURL('https://challog.dollarbasellc.com/');
  };

  return (
    <View style={styles.projectsSection}>
      <View style={styles.container}>
        <Text style={styles.title}>Our Projects</Text>
        <Text style={styles.subtitle}>
          Solutions designed to make life easier and more productive
        </Text>

        <View style={styles.grid}>
          <View style={styles.projectCard}>
            <Text style={styles.cardTitle}>Challog</Text>
            <Text style={styles.cardDescription}>
              A mobile-first challenge tracking application that helps you
              visualize progress and stay motivated.
            </Text>

            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.featureText}>
                  Real-time progress visualization
                </Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.featureText}>
                  Cloud synchronization across devices
                </Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.featureText}>
                  Elegant and intuitive interface
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={handleChallogPress}
              style={styles.launchButton}>
              <Text style={styles.launchButtonText}>Launch Challog</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.projectCard, styles.placeholderCard]}>
            <View style={styles.placeholderIcon}>
              <Text style={styles.placeholderIconText}>📦</Text>
            </View>
            <Text style={styles.placeholderTitle}>Next Project</Text>
            <Text style={styles.placeholderText}>
              We're working on something exciting. Check back soon!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  projectsSection: {
    paddingVertical: 96,
    paddingHorizontal: 24,
  },
  container: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'System',
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 64,
    fontSize: 18,
    maxWidth: 600,
    alignSelf: 'center',
    lineHeight: 28,
  },
  grid: {
    flexDirection: width > 768 ? 'row' : 'column',
    gap: 32,
  },
  projectCard: {
    flex: 1,
    backgroundColor: 'rgba(253, 253, 253, 0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 24,
    padding: 32,
  },
  placeholderCard: {
    minHeight: 400,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  cardDescription: {
    color: '#9ca3af',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 32,
  },
  featureList: {
    gap: 12,
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  checkmark: {
    color: '#10b981',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 2,
  },
  featureText: {
    color: '#d1d5db',
    fontSize: 16,
    flex: 1,
    lineHeight: 24,
  },
  launchButton: {
    backgroundColor: 'rgba(253, 253, 253, 0.05)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  launchButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  placeholderIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  placeholderIconText: {
    fontSize: 48,
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  placeholderText: {
    color: '#6b7280',
    textAlign: 'center',
    maxWidth: 300,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Projects;

