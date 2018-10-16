import React from 'react'
import {TouchableOpacity} from 'react-native'
import { View, Image, Text } from '@areslabs/react-native-withcss'
import {withNavigation} from 'react-navigation'

class TodoItem extends React.Component {
    handlePress = () => {
        const {pic, des, data, navigation} = this.props

        navigation.navigate('Task', {
            pic,
            des,
            data
        })
    }

    render() {
        const {pic, des, data} = this.props
        return (
            <TouchableOpacity
                onPress={this.handlePress}
            >
                <View className="item">
                    <Image source={pic}/>

                    <View className="info">
                        <Text>{des}</Text>
                        <Text className="data">{data}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(TodoItem);