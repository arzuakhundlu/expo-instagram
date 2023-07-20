import React from 'react'
import { ScrollView, View } from 'react-native'
import { TextInput } from 'react-native'
import { styles } from '../assets/styles/styles'
import SearcheSvg from '../assets/svgs/SearcheSvg'
import GridCards from '../components/GridCards'

export default function SearchePage() {
  return (
    <View style={styles.container}>
        <View style={styles.searcheCard}>
            <SearcheSvg height="20px" width="20px"/>
            <TextInput placeholderTextColor='#fff' style={styles.inputSearche} placeholder='Searche'/>
        </View>
        <ScrollView>
            <GridCards/>
        </ScrollView>
    </View>
  )
}
