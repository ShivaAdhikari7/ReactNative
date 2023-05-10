import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

export const ResturantInfo = ({ resturant = {} }) => {
  const {
    name = "Lumbini Hotel",
    address = "Kupandole,Lalitpur",
    image = "https://plus.unsplash.com/premium_photo-1682800179834-c05e7c7d0a09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  } = resturant;

  return (
    <>
      <View style={styles.container}>
        <Card>
          <Card.Cover source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
          </View>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    padding: 16,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    color: "green",
    fontSize: 16,
  },
});
