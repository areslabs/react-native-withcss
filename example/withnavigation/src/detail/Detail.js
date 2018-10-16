import React from 'react'
import {View, Text, StylesProvider } from '@areslabs/react-native-withcss'
import JustHello from './JustHello'
import Header from '../header/Header'

import DetailStyles from './Detail.css'

@StylesProvider(DetailStyles)
export default class Detail extends React.Component{
    render() {
        return (
            <View>
                <Header/>
                <Text>Detail1</Text>
                <Text>Detail2</Text>

                <JustHello/>
            </View>
        )
    }
}