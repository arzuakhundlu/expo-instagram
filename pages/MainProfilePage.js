import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from '../assets/styles/styles'
import BottomActions from '../components/BottomActions'
import GridCards from '../components/GridCards'
import MeShare from '../components/MeShare'
import ProfileMain from '../components/ProfileMain'
import ProfileMainBtns from '../components/ProfileMainBtns'
import ProfileMainTopCont from '../components/ProfileMainTopCont'
import ProfileMePostIcons from '../components/ProfileMePostIcons'
import ProfileMeStory from '../components/ProfileMeStory'
import { changeStateValue } from '../redux/MainReducer'

export default function MainProfilePage() {
  const position = useSelector(state=>state.Data.position);
  
  const dispatch = useDispatch()
  const shareOnclick =()=>{
    dispatch(changeStateValue({
      name:'position',
      value:!position
    }))
  
  }
  return (
    <View style={{...styles.container,position:'relative'}}>
        <ProfileMainTopCont shareOnclick={shareOnclick}/>
        <ProfileMain/>
        <ProfileMainBtns/>
        <ProfileMeStory/>
        <ProfileMePostIcons/>
        <GridCards/>
        <BottomActions/>
        {
          position?
          <MeShare/>:null
        }
    </View>
  )
}
