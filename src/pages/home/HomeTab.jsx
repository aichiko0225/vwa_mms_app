import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import tasksIcon from '../../assets/icons/read.png';
import updateIcon from '../../assets/icons/updatePassword.png';
import aboutIcon from '../../assets/icons/about.png';
import h5Icon from '../../assets/icons/logo1.png';

function ModuleButton({ title, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.module} onPress={onPress}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
          <Text style={styles.moduleTitle}>{title}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

export default function HomeTab() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Modules</Text>
      <View style={styles.grid}>
        <ModuleButton title="Tasks" icon={tasksIcon} onPress={() => navigation.navigate('Tasks')} />
        <ModuleButton title="Update Password" icon={updateIcon} onPress={() => navigation.navigate('ForgetPassword')} />
        <ModuleButton title="About" icon={aboutIcon} onPress={() => {}} />
        <ModuleButton
          title="Web H5"
          icon={h5Icon}
          onPress={() => navigation.navigate('WebView', 
            { 
              url: 'file:///android_asset/index.html#/pages/index/index'
              // __DEV__ ? 'http://192.168.51.43:8080/#/pages/index/index' : 'file:///android_asset/index.html#/pages/index/index' 
            })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  module: { width: '50%', padding: 8 },
  card: { borderRadius: 8 },
  cardContent: { alignItems: 'center', paddingVertical: 16 },
  icon: { width: 48, height: 48, marginBottom: 8 },
  moduleTitle: { fontSize: 14, fontWeight: '500' },
});