import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import TableSvg from '../assets/svgs/TableSvg'
import { styles } from '../assets/styles/styles'
import VideoPlay from '../assets/svgs/VideoPlay'

export default function MeShare() {
  return (
    <View style={styles.shareCont}>
      <View style={styles.shareView}>
        <Text style={styles.text}>Create</Text>
      </View>
      <View style={styles.shareView}>
        <TouchableOpacity style={styles.shareBtn}>
            <VideoPlay height='20px' width='20px'/>
            <Text style={styles.text}>Reels</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shareView}>
        <TouchableOpacity style={styles.shareBtn}>
            <TableSvg height='20px' width='20px'/>
            <Text style={styles.text}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shareView}>
        <TouchableOpacity style={styles.shareBtn}>
            <TableSvg height='20px' width='20px'/>
            <Text style={styles.text}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shareView}>
        <TouchableOpacity style={styles.shareBtn}>
            <TableSvg height='20px' width='20px'/>
            <Text style={styles.text}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shareView}>
        <TouchableOpacity style={styles.shareBtn}>
            <TableSvg height='20px' width='20px'/>
            <Text style={styles.text}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}