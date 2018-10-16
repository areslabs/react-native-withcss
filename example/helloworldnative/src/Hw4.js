import React from 'react'
import {ClassEnable, Text, View,FlatList} from 'react-native-withcss'

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

    getData = (num) => {
        const r = []
        for (let i = 0; i < num; i ++) {
            r.push({
                key: i
            })
        }
        return r
    }


    renderItem = ({item}) => {
        return <View><Text>hi{item.key}hi</Text></View>
    }

    render() {

        return (
            [
                <View><Text>duration:{this.state.duration}</Text></View>,
                <FlatList
                    data={this.getData(2000)}
                    renderItem={this.renderItem}
                />
            ]
        )
    }
}