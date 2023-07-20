import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../assets/styles/styles'
import DotsSvg from '../assets/svgs/DotsSvg'
import LikeSvg from '../assets/svgs/LikeSvg'
import CommentSvg from '../assets/svgs/CommentSvg'
import SendSvg from '../assets/svgs/SendSvg'
import SavedSvg from '../assets/svgs/SavedSvg'

export default function Post() {
  return (
    <View style={styles.post}>
        <View style={styles.postTop}>
            <View style={styles.profilePost}>
              <View style={styles.borderLinePost}>
                  <Image style={styles.imageProfil} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
              </View>
              <View>
                <Text style={styles.profileNameText}>arzuakhundlu</Text>
                <Text style={styles.postLoaction}>location</Text>
              </View>
            </View>
            <TouchableOpacity>
              <DotsSvg/>
            </TouchableOpacity>
        </View>
        <View>
          <Image style={styles.postImage}  source={{uri:'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?cs=srgb&dl=pexels-matheus-bertelli-573299.jpg&fm=jpg'}}/>
        </View>
        <View style={styles.actionIconsCont}>
          <View style={styles.actionIcons}>
            <TouchableOpacity>
              <LikeSvg/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconsLeft}>
              <CommentSvg/>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.iconsLeft}>
             <SendSvg/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <SavedSvg/>
          </TouchableOpacity>
        </View>
        <Text style={styles.likeText}>100 Likes</Text>
    </View>
  )
}
