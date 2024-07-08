import { View, Text, FlatList, Image, TouchableOpacity,Button } from 'react-native'
import React from 'react'
import { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { images } from '../assest/images/appassest';
import Header from '../../component/header';
import Modal from "react-native-modal";

const Page3 = ({ navigation }) => {
    // const [modalVisible, setModalVisible] = useState(false)
    const data = [
        {
            id: 1,
            img: images.img3,
            text1: "Cup cake with chocolate",
            text2: "by indigo violet",
            user: '10 - 2',
            time: "20 mint"



        },

        {
            id: 2,
            img: images.img4,
            text1: "Cup cake with chocolate",
            text2: "by indigo violet",
            user: '10 - 2',
            time: "20 mint"



        },
    ]

    // const MyModal = () => {
    //     return (

    //     );
    // };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Page4')}>
                <  Image source={item.img} style={{ width: 280, height: 280, borderRadius: 5 }} />
                <View style={{ backgroundColor: "white", height: 130, width: '90%', alignSelf: 'center', bottom: 20, borderRadius: 9, padding:10 }}>
                    <Text style={{ fontSize: 20, color: "black", marginRight: 30,}}>{item.text1}</Text>
                    <Text style={{ fontSize: 15, color: "gray", marginRight: 35}}>{item.text2}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Ionicons name="time-outline" color={"#e0517d"} size={20} />

                            <Text style={{ fontSize: 15, color: "gray" }}>{item.user}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center', }}>
                            <Ionicons name="time-outline" color={"#e0517d"} size={20} />
                            <Text style={{ fontSize: 15, color: "gray" }}>{item.time}</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }

    return (
        <View style={{ padding: 10, backgroundColor: "#e1e1e1 ", height: "100%" }}>
            <Header customDrawer={false} navigation={navigation} title={'Home'} />
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem}
                    horizontal
                    contentContainerStyle={{ gap: 15, marginTop: 20 }}
                />
            </View>
            <View>
                <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold' }}>Description</Text>
                <Text style={{ color: "gray", fontSize: 20, fontWeight: 10, marginTop: 20 }}>
                    justo. Quisque pretium ut nunc dolor augue, vel lacinia velit porta vel. Sed eu libero ut elit varius rutrum nec et urna. Nullam aliquam at.
                </Text>
                {/* <TouchableOpacity style={{}} onPress={() => setModalVisible(!modalVisible)}><Text style={{ backgroundColor: "yellow", }}>open Modal</Text></TouchableOpacity>

                

                <View style={{ flex: 1  }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ backgroundColor: '#DA4A5E',zIndex:90 }}>
                <Text style={{ }}>world</Text>
                </TouchableOpacity >
                   

<Modal onBackdropPress={() => setModalVisible(false)}
       transparent={true}
       visible={modalVisible}>
  <TouchableOpacity style={{ backgroundColor: '#B2D9CB' }}> 
    <Text style={{ color: 'black' }}>Hello</Text>
  </TouchableOpacity>
</Modal>
                </View> */}


            </View>


        </View>
    )

}


export default Page3;