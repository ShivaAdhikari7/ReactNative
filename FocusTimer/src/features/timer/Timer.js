import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CountDown } from "../../components/CountDown";

const DEFAULT_TIME = 0.1;
export const Timer = ({ focusSubject }) => {
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
