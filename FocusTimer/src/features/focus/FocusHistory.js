import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { Colors } from "../../utils/Colors";
import { fontSizes, spacing } from "../../utils/Sizes";
import { RoundedButton } from "../../components/RoundedButton";

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.status}</Text>;
};
export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style="0.5, alignItems:'center'">
        {focusHistory.length && (
          <>
            <Text style={styles.text}>Things you have focused on are: </Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <Text style={styles.historyItem(2)}>{focusHistory[0].subject}</Text>
            <ScrollView>
              {focusHistory.map((item, index) => (
                <Text key={item.key} style={styles.historyItem(item.status)}>
                  {item.subject}
                </Text>
              ))}
            </ScrollView>
            <View style={styles.clearContainer}>
              <RoundedButton size={75} title="Clear" onPress={clearHistory} />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  historyItem: (status) => ({
    color: status === 1 ? "red" : "green",
    fontSize: fontSizes.md,
  }),
  title: {
    color: "white",
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: "center",
    padding: spacing.md,
  },
});
