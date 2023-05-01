import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import { Focus } from "./src/features/focus/Focus";
import { FocusHistory } from "./src/features/focus/FocusHistory";

import { Colors } from "./src/utils/Colors";
import { fontSizes, spacing } from "./src/utils/Sizes";
export default function App() {
  const [currentSubject, setCurrentSubject] = useState("");
  const focusItems = [
    { key: "1", subject: "Read", status: 1 },
    { key: "2", subject: "Reading", status: 0 },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus onAddSubject={setCurrentSubject} />
          <FocusHistory focusHistory={focusItems} />
        </>
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
    // justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: spacing.sm,
    backgroundColor: Colors.darkBlue,
  },
  text: {
    fontSize: fontSizes.md,
    textAlign: "center",
  },
});
