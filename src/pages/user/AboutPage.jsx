import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';
import logoImage from '../../assets/icons/qa-logo.png';

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Card>
        <Card.Content>
          <Text style={styles.title}>QA Platform</Text>
          <Text style={styles.subtitle}>Version 1.0</Text>
          <Text style={styles.text}>Quality Assurance Test Case Management App.</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  logo: { alignSelf: 'center', width: 159, height: 80, marginBottom: 12 },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  subtitle: { color: '#666', marginBottom: 8 },
  text: { lineHeight: 20 }
});

