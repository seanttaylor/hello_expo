import { StyleSheet, Alert, FlatList } from "react-native";
import React, { useState } from "react";
import ColorButton from "@/components/ColorButton";
import ColorForm from "@/components/ColorForm";
import defaultColors from "@/data/defaultColors.json"
import { generate } from "shortid";


type Color = {
  id: string;
  color: string;
};

const useColors = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const addColor = color => {
    const newColor  = { id: generate(), color };
    setColors([ newColor, ...colors])
  };

  return { colors, addColor }
}

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const { colors, addColor } = useColors();

  return (
    <>
      <ColorForm onNewColor={ addColor} />
      <FlatList style={[styles.container, { backgroundColor }]} 
      data={colors}
      renderItem={( {item} ) => {
        return (
          <ColorButton key={item.id} backgroundColor={item.color} onPress={setBackgroundColor}/>
        )
      }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  }
});