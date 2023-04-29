import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Colors } from "./src/utils/Colors";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello world</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    backgroundColor: Colors.darkBlue,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.white,
  },
});
