import React from 'react'
import {Button} from '@areslabs/react-native-withcss'
import { withNavigation } from 'react-navigation'

class NaviButton extends React.Component {
    onButtonPress = () => {
        this.props.navigation.push(this.props.to)
    }

    render() {
        return (
            <Button
                onPress={this.onButtonPress}
                title="click me"
            />
        )
    }
}

export default withNavigation(NaviButton)