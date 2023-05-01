import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CountDown } from "../../components/CountDown";
import { spacing } from "../../utils/Sizes";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "./Timing";

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
  buttonWrapper: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 40,
  },
});
