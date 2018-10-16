import React from 'react';
import { StylesProvider, Text, View } from '@areslabs/react-native-withcss';

import AppStyles from './App.css'

@StylesProvider(AppStyles)
export default class App extends React.Component {
  render() {
    return (
          <View className="out">
              <Text>Hello World!</Text>
              <Text>react-native-withcss!</Text>
              <Text>Cool! Cool! Cool!</Text>
          </View>
    );
  }
}

