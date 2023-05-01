import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CountDown } from "../../components/CountDown";
import { spacing } from "../../utils/Sizes";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";
import { Colors } from "react-native/Libraries/NewAppScreen";

const DEFAULT_TIME = 0.1;
export const Timer = ({ focusSubject, clearSubject }) => {
  const [minutes, setMinutes] = useState(20);
  const [isStarted, setIsStarted] = useState(false);

  const onEnd = () => {
    setMinutes(DEFAULT_TIME);
    setIsStarted(false);
  };
  const changeTime = (min) => {
    setMinutes(min);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown minutes={minutes} isPaused={!isStarted} onEnd={onEnd} />
      </View>
      <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing On:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton title="-" size={50} onPress={clearSubject} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: Colors.white,
    textAlign: "center",
    marginBottom: 10,
    fontSize: 25,
  },
  task: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 22,
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    // gap: 40,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  clearSubject: {
    paddingBottom: 25,
    paddingLeft: 25,
  },
});
