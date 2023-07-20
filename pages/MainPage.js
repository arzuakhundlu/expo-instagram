import React from 'react'
import {ScrollView, View} from 'react-native'
import {styles} from '../assets/styles/styles'
import BottomActions from '../components/BottomActions'
import Post from '../components/Post'
import StoryCont from '../components/StoryCont'
import TopCont from '../components/TopCont'

export default function MainPage() {
    return (
        <View style={
            {
                flex: 4,
                ...styles.body
            }
        }>
            <View style={
                styles.container
            }>

                <TopCont/>
                <ScrollView>
                    <StoryCont/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>

                </ScrollView>
            </View>
        <BottomActions/>

        </View>
    )
}
