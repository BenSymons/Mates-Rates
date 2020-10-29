import React, { Component } from "react";
import { FlatList, View, Item, Text } from "react-native";
import { uuid } from "uuidv4";
import styles from "./styles";

export default class RestaurantList extends Component {
  state = {
    restaurantList: [
      {
        name: "Broccoli&Co",
        address: "Fake address here",
        id: uuid(),
      },
      {
        name: "CauliflowerLTD",
        address: "Somewhere in Manchester",
        id: uuid(),
      },
    ],
  };
  render() {
    const DATA = this.state.restaurantList;
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.address}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
