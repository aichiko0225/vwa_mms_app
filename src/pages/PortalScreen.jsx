import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import mmsIcon from '../assets/icons/logo1.png';
import useSystemData from '../hooks/useSystemData';

function PortalButton({ title, icon, onPress }) {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.cardContent}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
        <Text style={styles.title}>{title}</Text>
      </Card.Content>
    </Card>
  );
}

export default function PortalScreen() {
  const navigation = useNavigation();
  const { systems, refreshSystems } = useSystemData();
  useEffect(() => { refreshSystems(); }, [refreshSystems]);
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {systems.map(s => (
          <PortalButton
            key={String(s.id)}
            title={s.titleCn || s.titleEn}
            icon={mmsIcon}
            onPress={() => { navigation.replace('Home', { systemId: s.id, systemName: s.titleCn || s.titleEn }); }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 20, fontWeight: '700', marginBottom: 16 },
  grid: { gap: 12 },
  card: { borderRadius: 12 },
  cardContent: { alignItems: 'center', paddingVertical: 20 },
  icon: { width: 64, height: 64, marginBottom: 10 },
  title: { fontSize: 16, fontWeight: '600' },
});
