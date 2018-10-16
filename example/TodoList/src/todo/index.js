import React from 'react'
import { FlatList } from 'react-native'
import {View, Text, StylesProvider, ClassEnable} from '@areslabs/react-native-withcss'

import TodoItem from './TodoItem'

import todoCss from './todo.css'


const apic = require('../assets/a.png')
const bpic = require('../assets/b.png')
const cpic = require('../assets/c.png')
const dpic = require('../assets/d.png')

@StylesProvider(todoCss)
export default class Todo extends React.Component {
    state = {
        taskList: this.getTaskList(200)
    }

    getTaskList(num) {
        const r = []
        for (let i = 0; i< num; i++) {
            const offset = i % 4
            if (offset === 0) {
                r.push({
                    key: `_key${i}`,
                    des: `this is a task , I should help oldman! good boy`,
                    data: '2012-12-12',
                    pic: apic
                })
            } else if (offset === 1) {
                r.push({
                    key: `_key${i}`,
                    des: `this is a task , I should study hard and make progress every day `,
                    data: '2013-12-12',
                    pic: bpic
                })
            } else if (offset === 2) {
                r.push({
                    key: `_key${i}`,
                    des: `this is a task , I should go to bed early and get up early `,
                    data: '2014-12-12',
                    pic: cpic
                })
            } else {
                r.push({
                    key: `_key${i}`,
                    des: `this is a task , I should work hard and earn money `,
                    data: '2015-12-12',
                    pic: dpic
                })
            }
        }
        return r
    }

    render() {
        console.log('why?', StylesProvider, todoCss, View, ClassEnable)

        return (
            <View className="container">
                <View>
                    <Text>TODOLIST</Text>
                </View>

                <FlatList
                    data={this.state.taskList}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

    renderItem = ({item, index}) => {
        return <TodoItem {...item}/>
    }
}