import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"
const DishRow = ({id,name,description,price,image}) => {
  return (
    <TouchableOpacity>
      <View>
        <Text style={tw`text-lg mb-1`}>{name}</Text>
        <Text style={tw`text-gray-400`}>{description}</Text>
        </View>
    </TouchableOpacity>
  )
}
 
export default DishRow