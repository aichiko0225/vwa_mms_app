import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

function PlatformScreen({ route }) {
  const { systemId, systemName } = route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{systemName}</Text>

      {/* goto portal screen */}
      <Button style={styles.button} onPress={() => navigation.replace('Portal')} icon="arrow-left">
        <Text style={styles.buttonText}>Back to Portal</Text>
      </Button>
    </View>
  );
}
export default PlatformScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 20, fontWeight: '700', marginBottom: 16 },
  button: { marginBottom: 16 },
  buttonText: { fontSize: 16, fontWeight: '700' },
});