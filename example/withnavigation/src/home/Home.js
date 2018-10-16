import React from 'react'
import {View, Text, StylesProvider} from 'react-native-withcss'
import NaviButton from './NaviButton'
import Header from '../header/Header'

import homeStyles from './home.css'

@StylesProvider(homeStyles)
export default class Home extends React.Component{
    render() {
        return (
            <View className="cool">
                <Header/>
                <Text>cool1</Text>
                <Text>cool2</Text>
                <Text>cool3</Text>
                <Text>cool4</Text>
                <Text>cool5</Text>

                <NaviButton className="button" to="Detail"/>
            </View>
        )
    }
}