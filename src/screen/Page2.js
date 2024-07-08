import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Page3 from './Page3';

const Page2 = ({ navigation }) => {
    return (
        <ImageBackground source={require("../assest/images/img2.png")} style={{ height: '100%', backgroundColor: '#e0517d', justifyContent: 'space-between' }}>
   

            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: '40%' }} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" color={"black"} size={30} />
                </TouchableOpacity >
                <View >
                    <Text style={{ fontSize: 20, color: "black", }}>Account</Text>
                </View>

            </View>

            <View>

                <View style={{ height: 250, width: "100%", backgroundColor: "lightgray", opacity: 0.7, }}>
                </View>

                <View style={{ alignItems: 'center', position: 'absolute', zIndex: 10, alignSelf: 'center' }}>



                    <Text style={{ fontSize: 30, color: "white", margin: 20, fontWeight: 'bold' }}>Create a Account</Text>

                    <View style={{ flexDirection: 'row', gap: 40, marginTop: 20 }}>
                        {/* <TouchableOpacity onPress={()=>console.log('hello')} style={{ height: 50, width: 140, backgroundColor: "white", borderRadius: 30, justifyContent: 'center', alignItems: "center" }}> */}
                        <TouchableOpacity style={{ height: 50, width: 140, backgroundColor: "white", borderRadius: 30, justifyContent: 'center', alignItems: "center" }} onPress={() => navigation.navigate('Bottomtab')}>

                            <Text style={{ fontSize: 20, color: "#e0517d", fontWeight: 'bold' }}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50, width: 140, backgroundColor: "#e0517d", borderRadius: 30, justifyContent: 'center', alignItems: "center" }} onPress={() => navigation.navigate('Bottomtab')}>
                            <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                    <Text style={{ fontSize: 20, color: "gray", fontWeight: 'bold', marginTop: 40 }}>Continue without Membership</Text>

                </View>


            </View>

        </ImageBackground>
    )
}

export default Page2

// import React, { useState } from 'react';
// import { SearchBar } from '@rneui/themed';
// import { View, Text, StyleSheet } from 'react-native';

// type SearchBarComponentProps = {};

// const SwitchComponent: = () => {
// const [search, setSearch] = useState("");

// const updateSearch = (search) => {
//   setSearch(search);
// };

// return (
//   <View style={styles.view}>
//     <SearchBar
//       placeholder="Type Here..."
//       onChangeText={updateSearch}
//       value={search}
//     />
//   </View>
// );
// };

// const styles = StyleSheet.create({
// view: {
//   margin: 10,
// },
// });

// export default SwitchComponent;