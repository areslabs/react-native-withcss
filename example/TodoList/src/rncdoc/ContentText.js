import React from 'react'
import {Text} from 'react-native'
import {ClassEnable} from '@areslabs/react-native-withcss'

@ClassEnable
export default class ContentText extends React.Component {
    static displayName = "ContentText"

    render() {
        return (
            <Text style={this.props.style}>
                {this.props.children}
            </Text>
        )
    }
}