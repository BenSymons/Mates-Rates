import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#53C896",
    textAlign: "center",
  },
  item: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 5,
    padding: 5,
    marginLeft: "5%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
