import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

export const RoundedButton = ({
  style = {},
  textStyle,
  size = 125,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.white,
    borderWidth: 2,
  },
  text: { color: Colors.white, fontSize: size / 3 },
});
