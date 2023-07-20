import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles/styles'
import FaceBookSvg from '../assets/svgs/FaceBookSvg'
import { useNavigation } from '@react-navigation/native'
import {useSelector,useDispatch} from 'react-redux'
import { registerUser } from '../actions/MainAction'
import { changeStateValue } from '../redux/MainReducer'

export default function RegisterPage() {
    const navigate = useNavigation()
    const register = useSelector(state=>state.Data.register)
    const dispatch = useDispatch()
    function getInpValue(value,name){
        // console.log(value,name);
        dispatch(changeStateValue({
            name:name,
            value:value
        }))
    }
    function btnRegister(){
        if(register.email !=='' && register.username !=='' && register.full_name !=='' && register.password !=='' )
        {
            dispatch(registerUser(register))
            .then(resp=>{
                console.log(resp);
                if(resp === "success"){
                    navigate.navigate("LoginPage")
                    return 'success'
                }else{
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
                    <TextInput onChangeText={(value)=>getInpValue(value, "register.email")}  value={register.email} style={styles.loginInp} placeholder='email'placeholderTextColor='#6b6b6b'/>
                    <TextInput onChangeText={(value)=>getInpValue(value, "register.username")}  value={register.username} style={styles.loginInp} placeholder='username'placeholderTextColor='#6b6b6b'/>
                    <TextInput onChangeText={(value)=>getInpValue(value, "register.full_name")}  value={register.full_name} style={styles.loginInp} placeholder='Full Name'placeholderTextColor='#6b6b6b'/>
                    <TextInput onChangeText={(value)=>getInpValue(value, "register.password")} value={register.password} style={styles.loginInp} placeholder='password'placeholderTextColor='#6b6b6b'/>

                    <TouchableOpacity onPress={()=>btnRegister()} style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={{...styles.text,marginTop:20,marginBottom:10}}>Or</Text>
                    <TouchableOpacity style={styles.faceBtn}>
                        <FaceBookSvg/>
                        <Text style={styles.faceBtnText}>Sign in with Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpCard}>
                    <Text style={{color:'gray'}}>Do have an account ?</Text>
                    <TouchableOpacity  onPress={()=>navigate.navigate('LoginPage')}>
                        <Text style={{color:'white'}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}