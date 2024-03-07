import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'


const Categories = () => {
  return (
    <ScrollView 
    horizontal 
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10
    }}
    showsHorizontalScrollIndicator={false}>
     <CategoriesCard imgUrl='https://links.papareact.com/gn7'  title='Nice Title'/>
     <CategoriesCard  imgUrl='https://links.papareact.com/gn7' title='Testing' />
     <CategoriesCard imgUrl='https://links.papareact.com/gn7' title='microphone' />
    </ScrollView>
  )
}

export default Categories