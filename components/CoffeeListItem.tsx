import { View, Text } from '@/components/Themed';
import dummyCoffee from '@/assets/data/dummyCoffee.json';
import { FlatList, StyleSheet, Pressable } from 'react-native';

const CoffeeListItem = () => {
  return (
    <View>
      <FlatList
        contentContainerStyle={{ gap: 5, padding: 10 }}
        data={dummyCoffee}
        renderItem={(item) => (
          <Pressable style={styles.container}>
            <Text>{item.item.title}</Text>
          </Pressable>
        )}
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
