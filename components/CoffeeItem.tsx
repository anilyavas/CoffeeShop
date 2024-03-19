import { View, Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { StyleSheet, Image } from 'react-native';

const CoffeeItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.coffeeContainer}>
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default CoffeeItem;

const styles = StyleSheet.create({
  coffeeContainer: {
    margin: 5,
  },
  productContainer: {
    gap: 5,
    padding: 10,
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    color: Colors.lightgrey,
    fontWeight: 'bold',
  },
});
