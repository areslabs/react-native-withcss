import React from 'react'
import {Text, View, FlatList, StyleSheet} from 'react-native'
import {ClassEnable} from '@areslabs/react-native-withcss'

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
        return <View style={styles.viw}><Text style={styles.txt}>hi{item.key}hi</Text></View>
    }

    render() {

        return (
            [
                <View style={styles.viw}><Text style={styles.txt}>duration:{this.state.duration}</Text></View>,
                <FlatList
                    data={this.getData(3000)}
                    renderItem={this.renderItem}
                />
            ]
        )
    }
}

const styles = StyleSheet.create({
    viw: {
        height: 40,
        borderWidth: 1,
        marginVertical: 3,
        backgroundColor: 'gray'
    },
    txt: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
    },
});