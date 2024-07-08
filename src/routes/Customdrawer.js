import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Page4 from '../screen/Page4';


const Customdrawer = ({ navigation }) => {
    return (
        <View style={{ flex: 1, gap: 20, paddingVertical: 20, paddingHorizontal: 15 }}>



            <TouchableOpacity style={{ flexDirection: 'row', gap: 30, backgroundColor: "#f7b1bf", padding: 15 }}  >

                <Fontisto name="home" color={"black"} size={25} />
                <Text style={{ fontSize: 20, }}>Home</Text>


            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 30, padding: 15 }} onPress={() => navigation.navigate('Page4')}  >
                <MaterialCommunityIcons name="chef-hat" color={"black"} size={25} />
                <Text style={{ fontSize: 20, }}>Recipe</Text>



            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', gap: 30, padding: 15 }} onPress={() => navigation.navigate('Page5')}  >
                <MaterialCommunityIcons name="notebook" color={"black"} size={25} />
                <Text style={{ fontSize: 20, }}>Recipe Book</Text>


            </TouchableOpacity>

        </View>
    )
}

export default Customdrawer