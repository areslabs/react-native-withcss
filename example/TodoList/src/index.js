import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Rncdoc from './rncdoc'
import Task from './task'
import Todo from './todo'


const TodoStack = createStackNavigator({
    Todo: {
        screen: Todo,
        navigationOptions: {
            header: null
        }
    },
    Task
})

export default createBottomTabNavigator({
    TodoStack,
    Rncdoc,
});