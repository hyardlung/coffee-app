import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '../../shared/tokens';

export default function CoffeePage() {
  const { coffee } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>{coffee}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.whiteBackground,
  },
});
