import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {
      // saving error
    }
  }
export  const getData = async () => {
    const value = await AsyncStorage.getItem('@token')
      if(value !== null) {
        return value;
      }else{
        return ''
      }
 
  }

  
// export const storeLang = async (value) => {
//     try {
//       await AsyncStorage.setItem('@lang', value)
//     } catch (e) {
//       // saving error
//     }
//   }
// export  const getLang = async () => {
//     const value = await AsyncStorage.getItem('@lang')
//       if(value !== null) {
//         return value;
//       }else{
//         return ''
//       }
 
// }
// export const storeChild = async (value) => {
//     try {
//       await AsyncStorage.setItem('@child', value)
//     } catch (e) {
//       // saving error
//     }
//   }
// export  const getChild = async () => {
//     const value = await AsyncStorage.getItem('@child')
//       if(value !== null) {
//         return value;
//       }else{
//         return ''
//       }
 
// }
// export const storeChildName = async (value) => {
//     try {
//       await AsyncStorage.setItem('@childName', value)
//     } catch (e) {
//       // saving error
//     }
//   }
// export  const getChildName = async () => {
//     const value = await AsyncStorage.getItem('@childName')
//       if(value !== null) {
//         return value;
//       }else{
//         return ''
//       }
 
// }
// export const storeUser = async (value) => {
//     try {
//       await AsyncStorage.setItem('@user', value == ''?value: JSON.stringify(value))
//     } catch (e) {
//       // saving error
//     }
//   }
// export  const getUser = async () => {
//     const value = await AsyncStorage.getItem('@user')
//       if(value !== null) {
//         return value == ''? value: JSON.parse(value);
//       }else{
//         return ''
//       }
 
// }

// getData()
// .then(token=>{
//     console.log('token', token)
 
//     }
// })