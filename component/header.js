import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import { SearchBar } from '@rneui/themed';
const Header = ({ navigation, title, isLeftArrow, customDrawer, SearchBar }) => {
    const [modalVisble, setModalVisible] = useState(false)
    const [search, setSearch] = useState(false)





    return (
        <View style={{ padding: 10, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {isLeftArrow ? (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" color={"black"} size={25} />
                    </TouchableOpacity>
                ) : (
                    customDrawer ? (
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisble)}>
                            <Ionicons name="menu-outline" color={"black"} size={25} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Ionicons name="menu-outline" color={"black"} size={25} />
                        </TouchableOpacity>
                    )





                )
              

                }

            


                <Text style={{ fontSize: 20, color: "black" }}>{title}</Text>
                <Ionicons name="search" color={"black"} size={25} />
            </View>

            <View style={{ width: '50%' }}>
                <Modal
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutLeft'}
                    animationInTiming={600}
                    animationOutTiming={600}
                    isVisible={modalVisble}
                    onBackdropPress={() => setModalVisible(!modalVisble)}
                    style={{ margin: 0, backgroundColor: 'white', width: '50%' }}
                    backdropOpacity={0.2}

                >
                    <View style={{ position: 'absolute', top: 0, padding: 20, gap: 10, width: '100%' }}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisble)} style={{ alignSelf: 'flex-end', height: '40', width: 40 }}>
                            <Entypo name='circle-with-cross' color={'black'} size={30} />
                        </TouchableOpacity>
                        <Text>hello</Text>
                        <Text>hello</Text>
                        <Text>hello</Text>
                        <Text>hello</Text>
                        <Text>hello</Text>
                        <Text>hello</Text>
                        <Text>hello</Text>
                        <Text>hello</Text>
                        <Text>hello</Text>
                        <Text>hello</Text>
                    </View>
                </Modal>




            </View>
        </View>
    )
}

export default Header
