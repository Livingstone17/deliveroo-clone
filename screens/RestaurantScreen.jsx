import { ScrollView,View, Text, SafeAreaView,Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useRoute, useNavigation} from "@react-navigation/native"
import { urlFor } from '../sanity';
import tw from "twrnc"
const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {params:{
        id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
    },} =  useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`relative`}>
            <Image source= {{uri: urlFor(imgUrl).url()}} 
            style={tw`w-full h-56 bg-gray-300 p-4`}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RestaurantScreen