
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from "@react-navigation/native"
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import client from '../sanity'
const HomeScreen = () => {

  const navigation = useNavigation();
  const [featuredCategory,setFeaturedCategory] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(()=>{
    client.fetch(`*[_type=="featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`).then((data) => {
      setFeaturedCategory(data)
    }).catch(err=>err)
  },[]);

  console.log(featuredCategory)
  return (
    <SafeAreaView style={tw`p-2`}>
      {/* <Text> */}
      <View style={tw`flex-row pb-3 items-center mx-4`}>
        <Image source={{ uri: "https://links.papareact.com/wru", }}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
        />
        <View style={tw`flex-1`}>
            <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now</Text>
            <Text style={tw`font-bold text-xl`}> Current Location
              <ChevronDownIcon size={16} color="#00ccbb"/>
            </Text>
        </View>
        <UserIcon size={25} color="#00ccbb"/>
      </View>

      <View style={tw`flex-row items-center space-x-2 pb-2 mx-4`}>
        <View style={tw`flex-row flex-1 space-x-2 bg-gray-200 p-3`}>

            {/* <SearchIcon color="" /> */}
          <TextInput placeholder='Restaurants and cuisines' 
          keyboardType='default' style={tw``}/>
        </View>

      </View>
      {/* </Text> */}
      <ScrollView style={tw`bg-gray-200`}>
        <Categories />

        {/* Featured Rows */}
        {featuredCategory?.map((category) =>(
          <FeaturedRow 
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
          /> 
        ))}
         
        
      </ScrollView>
    </SafeAreaView>

  )
}

export default HomeScreen


