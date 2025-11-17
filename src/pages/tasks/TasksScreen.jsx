import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks Module</Text>
      <Text style={styles.subtitle}>This is a placeholder for tasks.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: '600' },
  subtitle: { marginTop: 8, color: '#666' },
});