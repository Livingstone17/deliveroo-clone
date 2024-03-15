import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useState, React } from 'react'
import tw from "twrnc"
// import Currency from "react-currency-formatter"
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'


const DishRow = ({ id, name, description, price, image }) => {

  const [isPressed, setisPressed] = useState(false)



  return (
    <>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        style={tw`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"} `}>
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg mb-1`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{description}</Text>
            <Text style={tw`text-gray-400 mt-2`}>
              {/* <Currency quantity={price} currency="Naira" /> */}
            </Text>
            <Text style={tw`text-gray-400`}>
              {price}
            </Text>
          </View>
          <View>
            <Image source={{ uri: urlFor(image).url() }}
              style={tw`h-20 w-20 bg-gray-300 p-4`} />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center space-x-2 pb-3`}>
            <TouchableOpacity>
              <MinusCircleIcon
                color="#00ccbb"
                size={40}
              />
            </TouchableOpacity>
            <Text> 0 </Text>
            <TouchableOpacity>
              <PlusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>

        </View>
      )}
    </>
  )
}

export default DishRow; 