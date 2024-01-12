import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Header from './molecules/header/header'
import Rewards from './molecules/rewards/rewards'
import CategoryList from './template/category-list/category-list'
const QuizApp = () => {
  return (
    <View style={styles.container}>
      <Header/>
      {/* <Rewards/> */}
      <CategoryList/>
    </View>
  )
}

export default QuizApp