import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>PogChamp</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Navigate to Image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Navigate to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to color demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square demo"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  },
  margin: {
    marginVertical: 3
  }
});

export default HomeScreen;
