import { ScrollView, View } from 'react-native'
import React from 'react'
import GridCard from './GridCard'
import { styles } from '../assets/styles/styles'

export default function GridCards() {
  return (
    <ScrollView>
        <View style={styles.grid}>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
            <GridCard/>
        </View>
    </ScrollView>
  )
}