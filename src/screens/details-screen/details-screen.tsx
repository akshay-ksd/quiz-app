import { View, Text, Image, FlatList } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Header from './header/header'
import Icons from "react-native-vector-icons/Ionicons"
import Animated, { SlideInLeft } from 'react-native-reanimated'

const DetailsScreen: FC<any> = (props) => {
    const item = props.route.params.item
    const data = [
        { questionNumber: 1 },
        { questionNumber: 2 },
        { questionNumber: 3 },
        { questionNumber: 4 },
        { questionNumber: 5 },
        { questionNumber: 6 },
        { questionNumber: 7 },
        { questionNumber: 8 },
        { questionNumber: 9 },
        { questionNumber: 10 }
    ]

    const renderItem = ({ item, index }: any) => {
        return (
            <Animated.View style={styles.renderItem} entering={SlideInLeft.delay(100*index)}>
                <View style={styles.box}>
                    <Text style={styles.title}>Question 1</Text>
                    <Icons name={"chevron-forward-outline"} size={20} color={"black"} />
                </View>
            </Animated.View>
        )
    }
    return (
        <View style={styles.container}>
            <Header item={item} />
            <FlatList data={data}
                renderItem={renderItem} />
        </View>
    )
}

export default DetailsScreen