import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../assets/styles/styles'
import PlusSvg from '../assets/svgs/PlusSvg'

export default function ProfileMeStory() {
  return (
        <View style={styles.storiesCont}>
           <View style={styles.meAddStory}>
            <View style={styles.borderLineMeStory}>
                    <PlusSvg width="55px" height="55px" />
                </View>
                <Text style={{...styles.btnsText,marginTop:5}}>New</Text>
           </View>
        </View>
  )
}
