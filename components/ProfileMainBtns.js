import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../assets/styles/styles'
import AddUserSvg from '../assets/svgs/AddUserSvg'

export default function ProfileMainBtns() {
    const navigate = useNavigation()
  return (
        <View style={styles.profileMainBtns}>
            <TouchableOpacity onPress={()=>navigate.navigate("EditProfile")} style={{...styles.btnsBack,width:156}}>
                <Text style={styles.btnsText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.btnsBack,width:156}}>
                <Text style={styles.btnsText}>Share profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnsBack}>
                <AddUserSvg />
            </TouchableOpacity>
        </View>
  )
}
