import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");


  function ColorButton({ backgroundColor }) {
    return (
      <TouchableHighlight style={styles.button} onPress={ ()=> setBackgroundColor(backgroundColor)} underlayColor="orange">
          <View>
            <View style={[styles.sample, { backgroundColor }]} />
            <Text style={styles.buttonText}>{backgroundColor}</Text>
          </View>
      </TouchableHighlight>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
     <ColorButton backgroundColor="green"/>
     <ColorButton backgroundColor="red"/>
     <ColorButton backgroundColor="blue"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
   margin: 10,
   padding: 10,
   borderColor: "black",
   borderWidth: 3,
   alignSelf: "stretch",
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  sample: {
    height: 10,
    width: 10,
    backgroundColor: "white",
    borderRadius: 10,
  }
});