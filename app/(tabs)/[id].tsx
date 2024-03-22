import { View, Text } from '@/components/Themed';
import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Product } from '@/constants/types';

const CoffeeDetailsScreen = ({ item }: { item: Product }) => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>CoffeeDetailsScreen</Text>
    </View>
  );
};

export default CoffeeDetailsScreen;
const styles = StyleSheet.create({});
