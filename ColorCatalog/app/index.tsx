import React from "react";
import { StyleSheet, Button, View, ActivityIndicator, Dimensions, Text, Platform } from "react-native";

const { height, width } = Dimensions.get('window');

export default function App() {
  const onButtonPress = () => {
    console.log("Button pressed!");
  }

  return (
    <View style={styles.page}>
      <ActivityIndicator size="large" color="#61DBFB" />
      <Button title="Click me" onPress={onButtonPress}/>
      <Text>OS: {Platform.OS} </Text>
      <Text>Height: {height} </Text>
      <Text>Width: {width} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40
  }
});