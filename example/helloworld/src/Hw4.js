import React from 'react'
import {View} from 'react-native'
import {ClassEnable, Text, View as CSSView,FlatList} from 'react-native-withcss'

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
        return <CSSView><Text>hi{item.key}hi</Text></CSSView>
    }

    render() {

        return (
            [
                <CSSView><Text>duration:{this.state.duration}</Text></CSSView>,
                <FlatList
                    data={this.getData(3000)}
                    renderItem={this.renderItem}
                />
            ]
        )
    }
}