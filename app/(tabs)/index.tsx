import { StyleSheet, SafeAreaView, TextInput } from 'react-native';

import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
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
      <View style={styles.inputContainer}>
        <FontAwesome name='search' size={25} color={Colors.grey} />
        <TextInput
          placeholder='Find Your Coffee...'
          onChangeText={searchInput}
        />
      </View>
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
  },
  inputContainer: {
    backgroundColor: Colors.darkgrey,
    borderRadius: 30,
    padding: 15,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 20,
  },
});
