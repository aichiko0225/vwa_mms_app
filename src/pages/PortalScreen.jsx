import React, { useEffect, useMemo, useLayoutEffect,useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import mmsIcon from '../assets/icons/logo1.png';
import useSystemData from '../hooks/useSystemData';
import { useTranslation } from 'react-i18next';

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
  const { i18n } = useTranslation();
  const isZh = (i18n.language || '').startsWith('zh');

  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    refreshSystems().finally(() => setLoading(false));
  }, [refreshSystems]);

  const platform = useMemo(() => systems.find(s => String(s.id) === '0' || String(s.issys) === '1'), [systems]);
  const business = useMemo(() => systems.filter(s => !(String(s.id) === '0' || String(s.issys) === '1')), [systems]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'QA Platform',
      headerRight: () => (platform ? (
        <TouchableOpacity style={styles.headerBtn} onPress={() => {
          navigation.replace('Platform', { systemId: platform.id, systemName: isZh ? platform.titleCn : platform.titleEn });
        }}>
          <Text style={styles.headerBtnText}>{isZh ? platform.titleCn : platform.titleEn}</Text>
        </TouchableOpacity>
      ) : null),
    });
  }, [navigation, platform, isZh]);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {business.map(s => (
          <PortalButton
            key={String(s.id)}
            title={isZh ? s.titleCn : s.titleEn}
            icon={mmsIcon}
            onPress={() => { navigation.replace('Home', { systemId: s.id, systemName: isZh ? s.titleCn : s.titleEn }); }}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 20, fontWeight: '700', marginBottom: 16 },
  headerBtn: { flexDirection: 'row', alignItems: 'center', marginRight: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { borderRadius: 12, width: '48%', marginBottom: 12, elevation: 2, backgroundColor: '#fff' },
  cardContent: { alignItems: 'center', paddingVertical: 16 },
  icon: { width: 48, height: 48, marginBottom: 8 },
  title: { fontSize: 14, fontWeight: '600' },
  headerIcon: { width: 20, height: 20, marginRight: 8 },
  headerBtnText: { fontSize: 14, fontWeight: '600' },
});
