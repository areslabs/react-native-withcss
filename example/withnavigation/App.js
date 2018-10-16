import React from 'react'
import {View, Text} from 'react-native'
import { createStackNavigator } from 'react-navigation'

import Home from './src/home/Home'
import Detail from './src/detail/Detail'


export default createStackNavigator({
    Home,
    Detail,
});