import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from '../assets/styles/styles'
import DownSvg from '../assets/svgs/DownSvg'
import MenuSvg from '../assets/svgs/MenuSvg'
import PlusSquareSvg from '../assets/svgs/PlusSquareSvg'

function ProfileMainTopCont({shareOnclick}) {
    const user = useSelector(state => state.Data.user)
    console.log(user);
  return (
    <View style={styles.profiletopCont}>
        <View>
            <TouchableOpacity  style={styles.profileName}>
            <Text style={styles.logoText}>{user.username}</Text>
                <DownSvg />
            </TouchableOpacity>
        </View>
        <View style={styles.iconContMain}>
            <TouchableOpacity onPress={()=>shareOnclick()}>
                <PlusSquareSvg />
            </TouchableOpacity>

            <TouchableOpacity>
                <MenuSvg />
            </TouchableOpacity>
                
        </View>

        
    </View>
  )
}

export default ProfileMainTopCont