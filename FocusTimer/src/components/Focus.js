import React, { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Colors } from "../utils/Colors";
import { RoundedButton } from "./RoundedButton";

export const Focus = ({ onAddSubject }) => {
  const [subject, setSubject] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What would you like to focus on?"
          placeholderTextColor="#fff"
          onChangeText={setSubject}
        />

        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => onAddSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
  },
  textInput: {
    color: Colors.white,
    height: 60,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    flex: 1,
    paddingRight: 2,
    fontSize: 14,
    marginRight: 20,
  },
});
