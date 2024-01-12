import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Hi, Isha</Text>
        <Text style={styles.description}>Let's make this day productive</Text>
      </View>
      <Image source={{uri:"https://st.depositphotos.com/1008402/58769/i/450/depositphotos_587692484-stock-illustration-illustration-smiling-woman-cartoon-close.jpg"}} style={styles.avatar}/>
    </View>
  )
}

export default Header