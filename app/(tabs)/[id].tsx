import { View, Text } from '@/components/Themed';
import { StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Product } from '@/constants/types';
import dummyData from '@/assets/data/dummyCoffee.json';

const CoffeeDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.header}>
      <Text>{}</Text>
      <Image source={{}} />
    </View>
  );
};

export default CoffeeDetailsScreen;
const styles = StyleSheet.create({
  header: {},
});
