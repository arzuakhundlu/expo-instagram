import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles/styles'

export default function EditProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.editProfileTopCont}>
        <TouchableOpacity>
            <Text style={styles.editBtnText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={{...styles.editBtnText,fontWeight:'700',fontSize:16}}>Edit Profile</Text>
        <TouchableOpacity>
            <Text style={styles.editBtnText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View>
        
      </View>
    </View>
  )
}