import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import DownSvg from '../assets/svgs/DownSvg'
import { styles } from '../assets/styles/styles'
import EditSvg from '../assets/svgs/EditSvg'
import LeftSvg from '../assets/svgs/LeftSvg'
import {useNavigation} from "@react-navigation/native"
import MessageProfil from '../components/MessageProfil'

export default function MessagePage() {
    const navigate = useNavigation()
  return (
    <View style={styles.container}>
        <View style={styles.profiletopCont}>
            <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigate.navigate("Home")}>
                    <LeftSvg />
                </TouchableOpacity>
                <TouchableOpacity  style={styles.profileName}>
                <Text style={styles.logoText}>arzuakhundlu</Text>
                    <DownSvg />
                </TouchableOpacity>
            </View>
            <View style={styles.iconContMain}>
                <TouchableOpacity>
                    <EditSvg />
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView>
            <MessageProfil/>
            <MessageProfil/>
            <MessageProfil/>
            <MessageProfil/>
            <MessageProfil/>
        </ScrollView>
    </View>
  )
}