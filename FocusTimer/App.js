import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Timer } from "./src/features/timer/Timer";
import { Focus } from "./src/features/focus/Focus";
import { FocusHistory } from "./src/features/focus/FocusHistory";

import { Colors } from "./src/utils/Colors";
import { fontSizes, spacing } from "./src/utils/Sizes";
export default function App() {
  const [focusHistory, setFocusHistory] = useState([]);
  const [focusSubject, setFocusSubject] = useState(null);
  const focusItems = [
    { key: "1", subject: "Read", status: 1 },
    { key: "2", subject: "Reading", status: 0 },
  ];
  const onClearHandler = () => {
    setFocusHistory([]);
  };

  const onclearSubject = () => {
    setFocusSubject(null);
  };

  const addFocusHistory = (subject, status) => {
    setFocusHistory([
      ...focusHistory,
      { key: String(focusHistory.length + 1), subject, status },
    ]);
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusItems));
    } catch (e) {
      console.log(e);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setFocusHistory(focusItems);
  }, []);

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  return (
    <SafeAreaView style={styles.container}>
      {!focusSubject ? (
        <>
          <Focus onAddSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusItems} onClear={onClearHandler} />
        </>
      ) : (
        <Timer focusSubject={focusSubject} clearSubject={onclearSubject} />
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
