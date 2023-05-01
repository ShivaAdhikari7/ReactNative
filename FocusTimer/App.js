import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { Timer } from "./src/features/timer/Timer";
import { Focus } from "./src/features/focus/Focus";
import { FocusHistory } from "./src/features/focus/FocusHistory";

import { Colors } from "./src/utils/Colors";
import { fontSizes, spacing } from "./src/utils/Sizes";

const STATUS = {
  COMPLETE: 1,
  CANCELLED: 2,
};

export default function App() {
  const [focusHistory, setFocusHistory] = useState([]);
  const [focusSubject, setFocusSubject] = useState("");
  const focusItems = [
    { key: "1", subject: "Reading", status: 1 },
    { key: "2", subject: "Writting", status: 0 },
    { key: "3", subject: "Excercise", status: 1 },
  ];
  const onClearHandler = () => {
    setFocusHistory([]);
  };

  const addFocusHistory = (subject, status) => {
    console.log(subject);
    console.log(focusHistory.length + 1);
    setFocusHistory([
      ...focusHistory,
      { key: String(focusHistory.length + 1), subject, status },
    ]);
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
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
    setFocusHistory(focusHistory);
  }, []);

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  console.log(focusHistory);
  return (
    <SafeAreaView style={styles.container}>
      {!focusSubject ? (
        <>
          <Focus onAddSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusItems} onClear={onClearHandler} />
        </>
      ) : (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistory(focusSubject, STATUS.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistory(focusHistory, STATUS.CANCELLED);
            setFocusSubject(null);
          }}
        />
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
