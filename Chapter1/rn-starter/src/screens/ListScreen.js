import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', age: 'Age 20' },
    { name: 'Friend 2', age: 'Age 10' },
    { name: 'Friend 3', age: 'Age 22' },
    { name: 'Friend 4', age: 'Age 14' },
    { name: 'Friend 5', age: 'Age 32' },
    { name: 'Friend 6', age: 'Age 16' },
    { name: 'Friend 7', age: 'Age 45' },
    { name: 'Friend 8', age: 'Age 72' },
    { name: 'Friend 9', age: 'Age 11' },
  ];

  return (
    <FlatList 
      keyExtractor={(friend) => friend.name}
      data={friends} 
      renderItem={({ item }) => {
        return <Text>{item.name} - {item.age}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;