import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../assets/styles/styles'
import { colors } from '../assets/styles/colors'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateValue } from '../redux/MainReducer'
import { uploadPost } from '../actions/MainAction'

export default function SharePost() {
    const image = useSelector(state => state.Data.image)
    const post = useSelector(state => state.Data.post)
    const dispatch = useDispatch()
     function changeInpValue(value,name){
        dispatch(changeStateValue({
            name:name,
            value:value
        }))
     }
     function shareBtn(){
      let formData = new FormData();
      formData.append('image',{
          uri : image,
          type : 'image/jpeg',
          name : 'image.jpg',
          fileName : 'image'
      })
      formData.append('title',post.title)
      formData.append('location',post.location)
      console.log('post', formData);
      formData.append('array',JSON.stringify())
      dispatch(uploadPost('post',formData))
      
  }
  return (
    <View style={styles.container}>
      <View style={styles.editProfileTopCont}>
        <TouchableOpacity>
            <Text style={styles.editBtnText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={{...styles.editBtnText,fontWeight:'700',fontSize:16}}>New Post</Text>
        <TouchableOpacity onPress={()=>shareBtn()}>
            <Text style={{...styles.editBtnText,color:colors.blue}}>Share</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{flexDirection:'row',gap:20,marginTop:30}}>
            <Image contentFit="cover" source={{uri:image}} style={{width: 100, height: 100}} />
            <View style={styles.textAreaContainer} >
                <TextInput
                onChangeText={(value)=>changeInpValue(value, "post.title")}  value={post.title}
                style={{color:colors.white}}
                placeholder="Write a caption..."
                placeholderTextColor='#6b6b6b'
                numberOfLines={10}
                multiline={true}
                />
            </View>
        </View>
        <Text style={{color:colors.white,marginTop:30,fontSize:17}}>Add location</Text>
        <TextInput 
        onChangeText={(value)=>changeInpValue(value, "post.location")}  value={post.location}
        style={{marginTop:5,color:colors.white}}
        placeholder='Add location' 
        placeholderTextColor='#6b6b6b'/>

      </View>
    </View>
  )
}