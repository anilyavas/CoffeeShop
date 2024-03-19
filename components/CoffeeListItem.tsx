import { View, Text } from '@/components/Themed';
import dummyCoffee from '@/assets/data/dummyCoffee.json';
import { FlatList, StyleSheet, Pressable } from 'react-native';
import CoffeeItem from './CoffeeItem';

const CoffeeListItem = () => {
  return (
    <View>
      <FlatList
        contentContainerStyle={{ gap: 10, padding: 10 }}
        data={dummyCoffee}
        renderItem={({ item }) => <CoffeeItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CoffeeListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
