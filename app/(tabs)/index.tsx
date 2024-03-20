import { StyleSheet, SafeAreaView } from 'react-native';

import { Text } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import CoffeeListItem from '@/components/CoffeeListItem';

export default function TabOneScreen() {
  const [input, setInput] = useState();

  const searchInput = () => {
    setInput(input);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Find the best Coffee for you</Text>

      <CoffeeListItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: Colors.brown,
  },
});
