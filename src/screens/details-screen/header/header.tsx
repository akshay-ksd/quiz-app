import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
const Header:FC<any> = ({item}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icons name={"chevron-back-outline"} size={24} color={"black"}/>
      </TouchableOpacity>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{item?.name}</Text>
        <Text style={styles.description}>{item?.count} Questions</Text>
      </View>
      <Image source={{uri:item?.image_url}} style={styles.avatar}/>
    </View>
  )
}

export default Header