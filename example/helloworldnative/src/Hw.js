import React from 'react'
import {ClassEnable, Text, View, ScrollView} from 'react-native-withcss'

@ClassEnable
export default class Hw extends React.Component{

    state = {
        duration: 0
    }
    componentWillMount() {
        this.start = new Date().getTime()
    }

    componentDidMount() {
        this.setState({
            duration: new Date().getTime() - this.start
        })
    }

    getSub = (num) => {
        const r = []
        for (let i = 0; i < num; i ++) {
            r.push(<View><Text>hi{i}hi</Text></View>)
        }
        return r
    }

    render() {

        return (
            <ScrollView>
                <View>
                    <Text>duration:{this.state.duration}</Text>
                </View>
                {this.getSub(100)}
            </ScrollView>
        )
    }
}