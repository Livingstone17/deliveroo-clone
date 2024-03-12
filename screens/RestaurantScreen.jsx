import { ScrollView, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from "@react-navigation/native"
import { urlFor } from '../sanity';
import tw from "twrnc"
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
const RestaurantScreen = () => {
    const navigation = useNavigation();
    const { params: {
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
    }, } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={tw`relative`}>
                    <Image source={{ uri: urlFor(imgUrl).url() }}
                        style={tw`w-full h-56 bg-gray-300 p-4`}
                    />
                    <TouchableOpacity
                        onPress={
                            navigation.goBack
                        }
                        style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}>
                        <ArrowLeftIcon color="#00ccbb" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={tw`bg-white`}>
                    <View style={tw`px-4 pt-4`}>
                        <Text style={tw`text-3xl font-bold`}>{title}</Text>
                    </View>
                    <View style={tw`flex-row space-x-2 my-1 mx-2`}>
                        <View style={tw`flex-row items-center space-x-1`}>
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text style={tw`text-xs text-gray-500`} >
                                <Text style={tw`text-green-500`}>{rating}</Text> . {genre}
                            </Text>
                        </View>

                    </View>
                    <View style={tw`flex-row items-center space-x-1 mx-2`}>
                        <MapPinIcon color="green" opacity={0.5} size={22} />
                        <Text style={tw`text-xs text-gray-500`} >
                            Nearby . {address}
                        </Text>
                    </View>
                    <Text style={tw`text-gray-500 mt-2 pb-4 mx-2`}>{short_description}</Text>
                    <TouchableOpacity style={tw`flex-row items-center space-x-2 p-4 border border-gray-300`}>
                        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                        <Text style={tw`pl-2 flex-1 text-md font-bold`}>Have a food allergy?</Text>
                        <ChevronRightIcon color="#00ccbb" />
                    </TouchableOpacity>
                </View>
                    <View>
                        <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl `}>
                            Menu
                        </Text>
                        {dishes.map(dish => (
                            <DishRow 
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            image={dish.image} />
                        ))}
                    </View>
            </ScrollView> 
        </SafeAreaView>
    )
}

export default RestaurantScreen