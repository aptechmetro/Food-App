import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images } from '../assest/images/appassest';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../component/header';



const Page4 = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const data = [
        {
            id: 1,
            img: images.img5,
            text1: "Home Cooking",




        },
        {
            id: 2,
            img: images.img6,
            text1: "Pastry Cooking",




        },
        {
            id: 3,
            img: images.img7,
            text1: "Food Babies",




        },
        {
            id: 4,
            img: images.img8,
            text1: "Smoothie Recipes",




        },
    ]

    const renderItem = ({ item }) => {
        return (
            <View>
                <Image source={item.img} style={{ justifyContent: 'space-between', width: 180, height: 120, }} />
                <View style={{ position: "absolute", height: "100%", justifyContent: 'center', width: "100%", alignItems: 'center', borderColor: "black" }}>
                    <Text style={{ color: "white" }}>{item.text1}</Text>
                </View>
            </View>


        )
    }
    return (
        <View style={{ padding: 20, }}>
            <Header customDrawer={true} isLeftArrow={false} navigation={navigation} title={'Recipe'} />
            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 20 }}>
                <Text style={{ color: "black", fontsize: 20, fontWeight: 10, marginTop: 20 }}>
                    Popular Recipes
                </Text>
                <Text style={{ color: "#e0517d", fontsize: 20, fontWeight: 10, marginTop: 20 }}>
                    View All
                </Text>




            </View>



            <FlatList
                numColumns={2}
                key={'_'}
                keyExtractor={item => "_" + item.id}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                data={data}
                contentContainerStyle={{ gap: 10, }}
                columnWrapperStyle={{ gap: 10, justifyContent: 'space-around' }}

            />


            <View>
                <Text style={{ fontSize: 20, color: "black", marginTop: 30 }}>Other Recipes</Text>
                <View style={{ backgroundColor: "#e5e5e5", height: 50, marginTop: 20, borderRadius: 12 }}>
                    <Text style={{ marginLeft: 20, fontSize: 15, color: "black" }}>Refreshments</Text>
                    <Text style={{ marginLeft: 20 }}>120 Recipes</Text>
                    <View style={{ backgroundColor: "#e5e5e5", height: 50, marginTop: 20, borderRadius: 12 }}>
                        <Text style={{ marginLeft: 20, fontSize: 15, color: "black" }}>Diet Dishes</Text>
                        <Text style={{ marginLeft: 20 }}>27 Recipes</Text>
                        <View style={{ backgroundColor: "#e5e5e5", height: 50, marginTop: 20, borderRadius: 12 }}>
                            <Text style={{ marginLeft: 20, fontSize: 15, color: "black" }}>Soup Recipes</Text>
                            <Text style={{ marginLeft: 20 }}>279 Recipes</Text>

                        </View>

                    </View>

                </View>
            </View>



        </View>
    )
}

export default Page4