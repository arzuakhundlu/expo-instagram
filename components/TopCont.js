import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../assets/styles/styles'
import DownSvg from '../assets/svgs/DownSvg'
import LikeSvg from '../assets/svgs/LikeSvg'
import MessageSvg from '../assets/svgs/MessageSvg'

export default function TopCont() {
    const navigate = useNavigation()
  return (
    <View style={styles.topCont}>
        <View style={styles.logo}>
            <Text style={styles.logoText}>Instagram</Text>
            <TouchableOpacity>
                <DownSvg />
            </TouchableOpacity>
        </View>
        <View style={styles.iconCont}>
            <TouchableOpacity>
                <LikeSvg/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate.navigate("MessagePage")}>
                <MessageSvg/>
            </TouchableOpacity>
        </View>
    </View>
  )
}
