import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

import { ResturantInfo } from "../components/ResturnatInfo";

export const ResturantScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Searchbar />
        </View>

        <View style={styles.list}>
          <ResturantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    padding: 16,
  },
  list: { backgroundColor: "cyan", flex: 1 },
});
