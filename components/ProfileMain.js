import React from 'react'
import {  Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from '../assets/styles/styles'
import ProfileImage from './ProfileImage'

export default function ProfileMain() {
    const user = useSelector(state => state.Data.user)
  return (
    <View style={styles.profileMainCont}>
        <ProfileImage/>
        <View style={styles.followersCont}>
            <TouchableOpacity style={styles.marginLeftRigth}>
                <Text style={styles.text}>100</Text>
                <Text style={styles.text}>post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.marginLeftRigth}>
                <Text style={styles.text}>100</Text>
                <Text style={styles.text}>follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.marginLeftRigth}>
                <Text style={styles.text}>100</Text>
                <Text style={styles.text}>follower</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}
