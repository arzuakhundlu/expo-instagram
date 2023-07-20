import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { styles } from '../assets/styles/styles'
import ProfileImage from './ProfileImage'

export default function StoryCont() {
  return (
    <View style={styles.storiesCont}>
        <ScrollView horizontal={true}>
        <ProfileImage/>
        <View style={styles.borderLine}>
            <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
        </View>
        <View style={styles.borderLine}>
            <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
        </View>
        <View style={styles.borderLine}>
            <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
        </View>
        <View style={styles.borderLine}>
            <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
        </View>   
        <View style={styles.borderLine}>
            <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
        </View>
        <View style={styles.borderLine}>
            <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
        </View>
        <View style={styles.borderLine}>
            <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
        </View>
        <View style={styles.borderLine}>
            <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
        </View>   
        <View style={styles.borderLine}>
            <Image style={styles.imageStory} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
        </View>
        </ScrollView>
    </View>
  )
}
