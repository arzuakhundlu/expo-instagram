import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles/styles'

export default function GridCard() {
  return (
    <View style={styles.card}>
      <Image style={styles.postCardImage} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
    </View>
  )
}