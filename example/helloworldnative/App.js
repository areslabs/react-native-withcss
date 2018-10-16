import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StylesProvider} from 'react-native-withcss'
import appCss from './app.css'
import Hw from './src/Hw2'

@StylesProvider(appCss)
export default class App extends React.Component {
  render() {
    return (
      <View>
          <Text>HIHI</Text>
        <Hw/>
      </View>
    );
  }
}
