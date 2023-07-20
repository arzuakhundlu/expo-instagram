import React from 'react'
import { View,Image, TouchableOpacity } from 'react-native'
import { styles } from '../assets/styles/styles'
import PlusSvg from '../assets/svgs/PlusSvg'

function ProfileImage() {
  return (
    <View style={styles.profileStory}>
            <View style={styles.borderLine}>
                <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
            </View>
            <TouchableOpacity style={styles.addStroy}>
                <PlusSvg width='25px' height='25px' />
            </TouchableOpacity>
        </View>
  )
}

export default ProfileImage