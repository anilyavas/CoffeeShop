import { StyleSheet, SafeAreaView, TextInput, Pressable } from 'react-native';

import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import CoffeeListItem from '@/components/CoffeeListItem';
import { FontAwesome } from '@expo/vector-icons';

export default function TabOneScreen() {
  const [input, setInput] = useState();

  const searchInput = () => {
    setInput(input);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Find The Best Coffee For You</Text>
      <View style={styles.inputContainer}>
        <Pressable>
          <FontAwesome name='search' size={20} color={Colors.grey} />
        </Pressable>
        <TextInput
          placeholder='Find your coffee...'
          style={{ fontSize: 20, color: Colors.white }}
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
  inputContainer: {
    width: '90%',
    borderRadius: 30,
    borderColor: Colors.grey,
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: Colors.brown,
  },
});
