import React from 'react'
import {View, Text, ClassEnable} from 'react-native-withcss'

@ClassEnable
export default class Header extends React.Component {
    static displayName = "Header"

    render() {
        return (
            <View style={this.props.style}>
                <Text>THIS IS COMMON HEADER</Text>
            </View>
        )
    }
}