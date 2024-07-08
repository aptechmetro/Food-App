import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import { images } from '../assest/images/appassest';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import Header from '../../component/header';
import { TextInput } from 'import React, { useRef, useState } from 'react'';

const Page5 = ({ navigation }) => {
    // const [inputValue,setInputValue] = useState('kuch bhi')
    // useEffect(()=>{
    // console.log('input', inputValue)
        
    // },[inputValue])

    const data = [
        {
            id: 1,
            image1: images.ck1,
            image2: images.ck2,
            image3: images.ck3,
            text1: "Healthy Breakfast",
            text2: "12 Recipes"




        },

        {
            id: 2,
            image1: images.Ls1,
            image2: images.Ls2,
            image3: images.Ls3,
            text1: "Light Snacks",
            text2: "12 Recipes"


        },


        {
            id: 3,
            image1: images.hb2,
            image2: images.hb2,
            image3: images.hb3,
            text1: "cookies",
            text2: "12 Recipes"



        },

        {
            id: 4,

            image1: images.df1,
            image2: images.df2,
            image3: images.df3,
            text1: "Diet food",
            text2: "12 Recipes"



        },

    ]
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginTop:20,width:160}}>
                <View>

                <Image source={item.image1} resizeMode='cover' style={{  width: '100%', height: 120, }} />
                </View>
                <View style={{ flexDirection: 'row', gap:10,marginTop:5 }}>
                    <Image source={item.image2} resizeMode='cover' style={{   height: 80,flexBasis:0,flexGrow:1 }} />
                    <Image source={item.image3} resizeMode='cover' style={{   height: 80,flexBasis:0,flexGrow:1 }} />
                </View>
                <Text style={{ color: "black", fontSize: 20 }}>{item.text1}</Text>
                <Text style={{ color: "black" }}>{item.text2}</Text>
            </View>


        )
    }
    return (
        <View style={{ padding: 20, flex: 1 }}>
            <Header isLeftArrow={true}  navigation={navigation} title={"Recipe Book"} />



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

          
          {/* <TextInput placeholder='Enter your name' placeholderTextColor={'black'} onChangeText={changedText => setInputValue(changedText)} style={{borderColor:"red",borderWidth:2}}>hello world</TextInput>
           */}

        </View>
    )
}

export default Page5