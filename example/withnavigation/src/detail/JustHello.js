import React from 'react'
import {View, Text, StylesProvider } from '@areslabs/react-native-withcss'
import JustHelloStyles from './JustHello.css'

function JustHello() {
    return (
        <View>
            <Text className="hello">Hello World</Text>
        </View>
    )
}

export default StylesProvider(JustHelloStyles)(JustHello)
