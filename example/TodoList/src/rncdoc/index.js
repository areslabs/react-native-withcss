import React from 'react'
import {StylesProvider, View, Text, ScrollView} from '@areslabs/react-native-withcss'

import ContentText from './ContentText'

import rncdocCss from './rncdoc.css'

@StylesProvider(rncdocCss)
export default class Rncdoc extends React.Component {

    render() {
        return (
            <ScrollView className="container">
                <View className="bigtitle">
                    <Text>react-native-withcss</Text>
                </View>
                <View className="section1 test">
                    <Text className="title">Features</Text>
                    <ContentText style={[{color: 'blue'}]}>1.支持css文件</ContentText>
                    <ContentText>2.支持css文件的HMR</ContentText>
                    <ContentText>3.css文件支持@import</ContentText>
                    <ContentText>4.支持css部分选择器： 类选择器，标签选择器，后代选择器</ContentText>
                    <ContentText>5.支持属性继承</ContentText>
                    <ContentText>6.支持属性简写</ContentText>
                </View>


                <View className="section2">
                    <Text className="title">API</Text>
                    <ContentText>1.StylesProvider 给组件提供一个样式文件， 其子组件都将根据这个样式文件去计算自己的样式。
                        推荐在每一个页面的容器组件上使用StylesProvider，一个页面一个样式文件。
                        实际上，可以在任何组件上使用StylesProvider。
                        推荐使用注解的方式，但是如果是Functional Components， 那么只能用StylesProvider(homeCss)(Home) 这种方式了</ContentText>
                    <ContentText>2.每一个ClassEnable的组件都会根据祖先元素指点的css文件去计算自身的样式，计算好的样式会赋值到 this.props.style
                        这个属性。 另外， react-native-withcss 提供了一套与React Native官方对应的基本组件，默认开启ClassEnable，
                        所以在使用基本组件的时候推荐</ContentText>
                </View>

                <View className="section3">
                    <Text className="title">其他</Text>
                    <ContentText>
                        1.标签选择器: 对于基本组件，react-native-withcss 提供了一套与React Native官方对应的基本组件。 所以可以直接
                    </ContentText>
                    <ContentText>
                        2.类选择器是使用的最多的一类选择器了
                    </ContentText>

                    <ContentText>
                        3.react-native-withcss 支持后代选择器， 比如我们有一个按钮， 在不同的情况下， 需要按钮背景色不同。
                    </ContentText>

                    <ContentText>
                        4.很多情况下， 我们会有一个公共的css文件， 这个文件里面包含了我们App的基本共用样式， 我们当然不会希望在每个css文件之前都重复的写一下这下样式， 这不仅麻烦， 修改起来也很不方便，
                        这个时候就可以用到 @import
                    </ContentText>
                </View>
            </ScrollView>
        )
    }
}