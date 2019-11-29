import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text style={Styles.text}>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};

const Styles = StyleSheet.create({
  text: {
    textAlign: "center"
  }
});

export default ColorCounter;
