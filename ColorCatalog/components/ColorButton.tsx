import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default function ColorButton({ backgroundColor, onPress = f => f }) {

    return (
        <TouchableHighlight style={styles.button} onPress={ ()=> onPress(backgroundColor)} underlayColor="orange">
            <View>
            <View style={[styles.sample, { backgroundColor }]} />
            <Text style={styles.buttonText}>{backgroundColor}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
     margin: 10,
     padding: 10,
     backgroundColor: "white",
     opacity: 0.9,
     borderColor: "black",
     borderWidth: 3,
     alignSelf: "stretch",
     borderRadius: 10
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