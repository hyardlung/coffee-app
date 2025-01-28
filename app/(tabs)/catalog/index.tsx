import { View, Text, StyleSheet } from 'react-native';
import CoffeeCard from '../../../shared/CoffeeCard/CoffeeCard';
import Cover from '../../../assets/icon.png';

export default function Catalog() {
  return (
    <View style={styles.container}>
      <Text>Catalog</Text>
      <CoffeeCard
        url="/catalog/capuchino"
        img={Cover}
        title="Capuchino"
        subtitle="With soy milk"
        price={5}
        rating={4.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
