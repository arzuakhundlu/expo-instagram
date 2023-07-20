import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../assets/styles/styles'
import CameraSvg from '../assets/svgs/CameraSvg'

export default function MessageProfil() {
  return (
    <View style={{marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={styles.borderLinePost}>
                <Image style={styles.imageProfilMessage} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
            </View>
            <View>
                <Text style={styles.profileNameText}>arzuakhundlu</Text>
                <Text style={styles.message}>Message new</Text>
            </View>
        </View>
        <TouchableOpacity style={{marginRight:8}}>
            <CameraSvg />
        </TouchableOpacity>
    </View>
  )
}
