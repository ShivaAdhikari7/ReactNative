import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { RoundedButton } from "./src/components/RoundedButton";
import { Focus } from "./src/components/Focus";

import { Colors } from "./src/utils/Colors";
export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus onAddSubject={setCurrentSubject} />
      ) : (
        <Text style={[{ color: Colors.white }, styles.text]}>
          Hello from {currentSubject}
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: Colors.darkBlue,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
