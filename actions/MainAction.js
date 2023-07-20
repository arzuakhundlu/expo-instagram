import axios from "axios";
import { getData, storeData } from "../AsyncStorage";
import { main_url } from "../MAIN_API";
import { changeStateValue } from "../redux/MainReducer";

export const registerUser = (data)=> async dispatch =>{
    return await axios.post(`${main_url}/register`,data)
    .then(resp=>{
        console.log(resp.data);
        return "success";
    }).catch(err=>{
        console.log(err.response);
        return "error";
    })
}

export const loginUser = (data) => async dispatch =>{
    // console.log(data);
    return await axios.post(`${main_url}/login`,data)
    .then(resp=>{
        // console.log(resp.data.token);
        dispatch(changeStateValue({
            name: 'user',
            value: resp.data.user
        }))
        storeData(resp.data.token)
        return "success";
    }).catch(err => {
        console.log(err.response);
        return "error"; 
    })
}


export const getLoginData = (token)=>async dispatch => {
    return await axios.get(`${main_url}/login-user`, {
        headers:{
            "Authorization": `Bearer ${token}`,
            "Accept":"application/json",
            "Content-Type": "application/json"
        }
    }).then(resp=>{
        console.log(resp.data)
        dispatch(changeStateValue({
            name: 'user',
            value: resp.data
        }))
        return "success"
    }).catch(err=>{
        console.log(err.response)
        return "error"
    })
}

export const uploadPost=(uri,data,token) => async dispatch =>{
    return await axios.post(`${main_url}/${uri}`,data,{
        headers:{
            "Authorization": `Bearer ${token}`,
            "Accept":"application/json",
            'Content-Type': 'multipart/form-data'
        }
    }).then(resp=>{
        console.log(resp.data)
        dispatch(changeStateValue({
            name: 'image',
            value: resp.data
        }))
        dispatch(getLoginData())
        return "success"
    }).catch(err=>{
        console.log(err.response)
        return "error"
    })
}