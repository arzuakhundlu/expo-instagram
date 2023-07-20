import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TableSvg from '../assets/svgs/TableSvg'
import { styles } from '../assets/styles/styles'
import UserSvg from '../assets/svgs/UserSvg'
import VideoPlay from '../assets/svgs/VideoPlay'

export default function ProfileMePostIcons() {
  const [position, setPosition] = useState('1')
  return (
    <View style={styles.meIcons}>
      {
        position == '1'?
        <TouchableOpacity onPress={()=>setPosition('1')} style={{...styles.meBtnIcons,...styles.meBtnIconsAct}}>
          <TableSvg/>
        </TouchableOpacity>:
        <TouchableOpacity onPress={()=>setPosition('1')} style={styles.meBtnIcons}>
        <TableSvg/>
      </TouchableOpacity>
      }
      {
        position == '2'?
        <TouchableOpacity onPress={()=>setPosition('2')} style={{...styles.meBtnIcons,...styles.meBtnIconsAct}}>
          <VideoPlay/>
        </TouchableOpacity>:
        <TouchableOpacity onPress={()=>setPosition('2')} style={styles.meBtnIcons}>
          <VideoPlay/>
        </TouchableOpacity>
      }
      {
        position == '3'?
        <TouchableOpacity onPress={()=>setPosition('3')} style={{...styles.meBtnIcons,...styles.meBtnIconsAct}}>
          <UserSvg/>
        </TouchableOpacity>:
        <TouchableOpacity onPress={()=>setPosition('3')} style={styles.meBtnIcons}>
          <UserSvg/>
        </TouchableOpacity>
      }
        
    
    </View>
  )
}