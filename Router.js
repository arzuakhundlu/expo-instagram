import React, { useEffect, useState } from 'react'
import MainProfilePage from './pages/MainProfilePage';
import SearchePage from './pages/SearchePage';
import MessagePage from './pages/MessagePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import { getLoginData, uploadPost } from './actions/MainAction';
import EditProfile from './components/EditProfile';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { styles } from './assets/styles/styles';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getData, storeData } from './AsyncStorage';
import LoadingPage from './pages/LoadingPage';
import { changeStateValue } from './redux/MainReducer';
import SharePost from './components/SharePost';

const Stack = createNativeStackNavigator();


function Router() {
    const image = useSelector(state => state.Data.image)
    // const visible = useSelector(state => state.Data.visible)
    const [visible, setVisible] = useState(true);
    const navigate = useNavigation();
    const dispatch = useDispatch();
    useEffect(()=>{
        getData()
        .then(token=>{
            console.log(token)
            if(token && token != ''){
                dispatch(getLoginData(token))
                .then(resp=>{
                    console.log("rr", resp)
                    if(resp == "success"){
                        navigate.navigate("Home")
                    }else{
                        navigate.navigate("LoginPage");
                        storeData("")
                    }
                })
            }else{
                navigate.navigate("LoginPage");
                storeData("")
            }
        })
    },[])

    function cleareImage(){
        dispatch(changeStateValue({
            name: 'image',
            value:''
        }))
    }

    function sharePost(){
        navigate.navigate('SharePost')
        setVisible(false)
        let formData = new FormData();
        formData.append('image',{
            uri : image.assets[0].uri,
            type : image.assets[0].type,
            name : image.assets[0].fileName
        })
        console.log(formData);
        dispatch(uploadPost('image',formData))
    }
    
  return (
    <View style={styles.container}  >
    <Stack.Navigator initialRouteName='Loading'>
      <Stack.Screen options={{headerShown:false}} name="Loading" component={LoadingPage} />
      <Stack.Screen options={{headerShown:false}} name="Home" component={MainPage} />
      <Stack.Screen options={{headerShown:false}} name="SharePost" component={SharePost} />
      <Stack.Screen options={{headerShown:false}} name="SearchePage" component={SearchePage} />
      <Stack.Screen options={{headerShown:false}} name="MainProfilePage" component={MainProfilePage} />
      <Stack.Screen options={{headerShown:false}} name="MessagePage" component={MessagePage} />
      <Stack.Screen options={{headerShown:false}} name="LoginPage" component={LoginPage} />
      <Stack.Screen options={{headerShown:false}} name="RegisterPage" component={RegisterPage} />
      <Stack.Screen options={{headerShown:false}} name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
    {
        image != '' && visible == true ? 
        <View  style={{justifyContent: 'center', alignItems:'center',flex:1, backgroundColor: "rgba(0, 0, 0, 0.5)", width: '100%', height: '100%', position: 'absolute', top:0, left:0}}>
        <View style={{flexDirection:'row',gap:10}}>
           <TouchableOpacity style={styles.closeBtn} onPress={()=>cleareImage()}>
           <Text style={styles.editBtnText}>X</Text>
           </TouchableOpacity>
           <TouchableOpacity   onPress={()=>sharePost()}>
           <Text  style={styles.editBtnText}>Next</Text>
           </TouchableOpacity>
        </View>
        <Image contentFit="cover" source={{uri: image}} style={{width: 400, height: 400}} />
      </View>:null
    }
  </View>
  )
}

export default Router