import React from 'react'
import {StylesProvider, Image, View, Text} from '@areslabs/react-native-withcss'

import taskCss from './task.css'

@StylesProvider(taskCss)
export default class Task extends React.Component {

    render() {
        const { navigation } = this.props
        const pic = navigation.getParam('pic')
        const des = navigation.getParam('des')
        const data = navigation.getParam('data')

        let dataClz = ""
        if (data === '2012-12-12') {
            dataClz = "aclz"
        } else if (data === '2013-12-12') {
            dataClz = "bclz"
        } else if (data === '2014-12-12') {
            dataClz = "cclz"
        } else {
            dataClz = "dclz"
        }

        return (
            <View>
                <Image className="infoPic" source={pic}/>

                <View className="des1">
                    <Text>{des}</Text>
                </View>
                <View className="des2">
                    <Text>{des}</Text>
                </View>
                <View className="des3">
                    <Text>{des}</Text>
                </View>

                <View className={dataClz}>
                    <Text>{data}</Text>
                </View>
            </View>
        )
    }
}