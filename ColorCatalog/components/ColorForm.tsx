import { StyleSheet, View, TextInput, Button } from "react-native";
import React, { useState, useRef } from "react";


export default function ColorForm( { onNewColor = f => f}) {
    const [inputValue, setInputValue ] = useState("");
    const input = useRef<TextInput>(null);

    const handleAddColor = () => {
        if (input.current !== null) {
            input.current.blur();
        }
        onNewColor(inputValue)
        setInputValue("");
    }

    return (
        <View style={styles.container}>
            <TextInput 
            ref={input}
            style={styles.txtInput} 
            value={inputValue} 
            autoCapitalize="none" 
            onChangeText={setInputValue}
            placeholder="Enter a color..."
            />
            <Button title="add" onPress={handleAddColor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5
    }
});