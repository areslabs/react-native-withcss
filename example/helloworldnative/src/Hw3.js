import React from 'react'
import {ClassEnable} from '@areslabs/react-native-withcss'
import {Text, View,ScrollView, StyleSheet} from 'react-native'

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
            r.push(<View style={styles.viw}><Text style={styles.txt}>hi{i}hi</Text></View>)
        }
        return r
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.viw}>
                    <Text style={styles.txt}>duration:{this.state.duration}</Text>
                </View>
                {this.getSub(2000)}
            </ScrollView>
        )
    }
}

const styles = {
    viw: {
        height: 40,
        borderWidth: 1,
        marginVertical: 3
    },
    txt: {
        color: 'red',
        fontSize: 20
    },
}