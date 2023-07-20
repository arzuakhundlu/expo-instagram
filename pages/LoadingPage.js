import React from 'react'
import { Image, View } from 'react-native'

function LoadingPage() {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: '40%', height: 150}} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/600px-Instagram_logo.png"}} />
    </View>
  )
}

export default LoadingPage