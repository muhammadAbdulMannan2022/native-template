import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  const { id, source } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deep Link Received!</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Parameter ID:</Text>
        <Text style={styles.value}>{id || 'No ID provided'}</Text>
        <Text style={styles.label}>Source:</Text>
        <Text style={styles.value}>{source || 'Unknown'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 25,
    borderRadius: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  label: {
    color: '#94a3b8',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  value: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
});
