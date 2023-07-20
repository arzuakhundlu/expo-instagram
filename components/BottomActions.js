import React, { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from '../assets/styles/styles'
import HomeSvg from '../assets/svgs/HomeSvg'
import PlusSquareSvg from '../assets/svgs/PlusSquareSvg'
import SearcheSvg from '../assets/svgs/SearcheSvg'
import {useNavigation} from "@react-navigation/native"
import VideoPlay from '../assets/svgs/VideoPlay'
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux'
import { changeStateValue } from '../redux/MainReducer'


export default function BottomActions() {
  const navigate = useNavigation()
  const [image, setImage] = useState(null);
  const dispatch = useDispatch()
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        dispatch(changeStateValue({
          name: 'image',
          value: result.assets[0].uri
        }))
      }
    };
  return (
    <View style={styles.bottomActions}>
      <TouchableOpacity onPress={()=>navigate.navigate("Home")}>
        <HomeSvg/>
      </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigate.navigate("SearchePage")}>
          <SearcheSvg width="30px" height="30px"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage}>
          <PlusSquareSvg/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate.navigate("SearchePage")}>
         <VideoPlay/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate.navigate("MainProfilePage")}>
          <View style={styles.borderLineAction}>
              <Image style={styles.imageProfilAction} source={{uri:'https://images.pexels.com/photos/14579361/pexels-photo-14579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
          </View>
        </TouchableOpacity>
    </View>
  )
}
