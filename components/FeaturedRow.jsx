import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import tw from 'twrnc'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ({title,description,id}) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}> 
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>

      <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15}}
      showsHorizontalScrollIndicator={false}>
        {/* Restaurant cards */}
        <RestaurantCards 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title=" Tu shi"
        rating={4.5}
        genre="Chinese"
        address="432 Ibadan close, Apomu Layout"
        short_description="Odun pa"
        dishes={[]}
        long={6.45}
        lat={3.005}
        />
         <RestaurantCards 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title=" Tu shi"
        rating={4.5}
        genre="Chinese"
        address="432 Ibadan close, Apomu Layout"
        short_description="Odun pa"
        dishes={[]}
        long={6.45}
        lat={3.005}
        />
         
         
      </ScrollView>
    </View>
  )
}

export default FeaturedRow