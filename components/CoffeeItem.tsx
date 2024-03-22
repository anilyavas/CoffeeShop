import { View, Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';

type Product = {
  image: string;
  title: string;
  ingredients: string;
  price: string;
};
const CoffeeItem = ({ item }: { item: Product }) => {
  const [product, setProduct] = useState();

  const addFavorite = () => {};
  return (
    <View style={styles.coffeeContainer}>
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.ingredients} numberOfLines={1}>
          {item.ingredients}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            $ <Text> {item.price}</Text>
          </Text>
          <Pressable
            onPress={addFavorite}
            style={{
              margin: 10,
              padding: 5,
              backgroundColor: Colors.brown,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
            }}
          >
            <Text style={{ fontSize: 16 }}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CoffeeItem;

const styles = StyleSheet.create({
  coffeeContainer: {
    marginTop: 10,
    padding: 5,
  },
  productContainer: {
    gap: 5,
    padding: 15,
    backgroundColor: Colors.darkgrey,
    margin: 10,
    borderRadius: 30,
  },
  priceContainer: {
    backgroundColor: Colors.darkgrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    color: Colors.brown,
    fontSize: 16,
    padding: 5,
    flex: 1,
  },
  image: {
    width: 150,
    aspectRatio: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: 'bold',
    padding: 5,
  },
  ingredients: {
    color: Colors.lightgrey,
    paddingLeft: 5,
    width: 100,
  },
});
