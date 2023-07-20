import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React from 'react'
import {useEffect} from 'react-native';
import { styles } from '../assets/styles/styles'
import FaceBookSvg from '../assets/svgs/FaceBookSvg'
import { useNavigation } from '@react-navigation/native'
import {useSelector,useDispatch} from 'react-redux'
import { loginUser } from '../actions/MainAction'
import { changeStateValue } from '../redux/MainReducer'


export default function LoginPage() {
    const navigate = useNavigation()
    const login = useSelector(state=>state.Data.login)
    const dispatch = useDispatch()

    function getInpValue(value, name){
        // console.log(value,name);
        dispatch(changeStateValue({
            name:name,
            value:value
        }))
    }
    function btnLogin(){
        if(login.email !=='' && login.password !=='' )
        {
            dispatch(loginUser(login))
            .then(resp=>{
                console.log(resp);
                if(resp == "success"){
                    navigate.navigate("Home")
                    return 'success'
                }else{
                    // console.log('a');
                    return 'error'
                }
            })
        }
    }


  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios"?"height":null} style={styles.container}>
        <ScrollView>
            <View style={{marginRight:30,marginLeft:30}}>
                <View>
                    <Text style={styles.loginlogo}>Instagram</Text>
                    <TextInput onChangeText={(value)=>getInpValue(value, "login.email")}  value={login.email} style={styles.loginInp} placeholder='email'placeholderTextColor='#6b6b6b'/>
                    <TextInput onChangeText={(value)=>getInpValue(value, "login.password")} value={login.password} style={styles.loginInp} placeholder='password'placeholderTextColor='#6b6b6b'/>

                    <TouchableOpacity >
                        <Text style={styles.forgotText}>Forget password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>btnLogin()} style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Log in</Text>
                    </TouchableOpacity>
                    <Text style={{...styles.text,marginTop:20,marginBottom:10}}>Or</Text>
                    <TouchableOpacity style={styles.faceBtn}>
                        <FaceBookSvg/>
                        <Text style={styles.faceBtnText}>Log in with Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpCard}>
                    <Text style={{color:'gray'}}>Don't have an account ?</Text>
                    <TouchableOpacity onPress={()=>navigate.navigate('RegisterPage')}>
                        <Text style={{color:'white'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        

    </KeyboardAvoidingView>
  )
}