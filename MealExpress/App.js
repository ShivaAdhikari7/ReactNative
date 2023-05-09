import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "orange",
          marginTop: StatusBar.currentHeight,
        }}
      >
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
        </View>
        <View style={{ backgroundColor: "cyan", flex: 1 }}>
          <Text style={{ color: "red" }}>List</Text>
        </View>
      </View>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
