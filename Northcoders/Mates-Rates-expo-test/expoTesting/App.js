import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import styles from './components/styles';

export default function App() {
  return (
    <View>
      <Header />
      <RestaurantList />
    </View>
  );
}
