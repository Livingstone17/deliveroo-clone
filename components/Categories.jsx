import { View, Text,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import client, { urlFor } from '../sanity'



const Categories = () => {
  const [categories,setCategories] = useState([])

  useEffect(()=>{
    client.fetch(`
      *[_type == "category"]
    `).then(data => (
      setCategories(data)
    )).catch(err=>err)
  },[])

  return (
    <ScrollView 
    horizontal 
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10
    }}
    showsHorizontalScrollIndicator={false}>
      {categories.map(category => (
         <CategoriesCard 
         key={category._id}
         imgUrl={urlFor(category.image).url()}  title={category.name}/>
      ))}
    
     
    </ScrollView>
  )
}

export default Categories