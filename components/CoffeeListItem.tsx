import { View, Text } from '@/components/Themed';
import dummyCoffee from '@/assets/data/dummyCoffee.json';
import { FlatList, StyleSheet } from 'react-native';
import CoffeeItem from './CoffeeItem';

const CoffeeListItem = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={{
          flexWrap: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={dummyCoffee}
        renderItem={({ item }) => <CoffeeItem item={item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CoffeeListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
});
