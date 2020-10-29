import React, { Component } from 'react';
import { FlatList, View, Item, Text } from 'react-native';

export default class RestaurantList extends Component {
  state = {
    restaurantList: [
      {
        name: 'Broccoli&Co',
        id: 'f7866ca9-453c-4a46-ae8d-884c46d408a2'
      }
    ]
  };
  render() {
    const DATA = this.state.restaurantList;
    const renderItem = ({ item }) => <Text>{item.name}</Text>;
    return (
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

// const { uuid } = require('uuidv4');
