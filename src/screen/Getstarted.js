// import React from 'react';
// import { Image, Text, TouchableOpacity, View } from 'react-native';
// import Entypo from 'react-native-vector-icons/Entypo'

// const Getstarted = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1 }}>

//       {/* <Text>Text</Text> */}
//       <View>
//         <Image source={require("../assest/images/img1.png")} style={{ height: 400, width: 500 }} resizeMode='cover' />
//         <View style={{ position: 'absolute', justifyContent: 'center', height: '100%', alignItems: 'center', width: "100%" }}>

//           <Text style={{ fontSize: 40, color: "gray", top: 30, marginLeft: 40 }}>Lets get </Text>
//           <Text style={{ fontSize: 40, color: "gray", top: 30, marginLeft: 55 }}>to cooked</Text>
//         </View>
//       </View>
//       <View style={{ padding: 40 }}>
//         <Text style={{ marginTop: 20, fontSize: 30, color: "black" }}>
//           WELCOME
//         </Text>
//         <Text style={{ marginTop: 20, fontSize: 20, color: "black" }}>
//           Praesent tellus mauris, tincidunt nec ipsumid, faucibus pellentesque leo. Nunc congue. ac tellus quis porttitor.
//         </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Page2')} style={{ alignSelf: 'center' }}>
//           <Entypo name="dots-three-horizontal" color={"red"} size={50} />
//         </TouchableOpacity>
//       </View>

//     </View>
//   );
// };

// export default Getstarted;

import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons';


const slides =  [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assest/images/df1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assest/images/hb1.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\n',
    image: require('../assest/images/ck1.png'),
    backgroundColor: '#22bcb5',

    getStarted:true
  }

];

const App = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
        {item.getStarted ? (
          <TouchableOpacity  onPress={() => navigation.navigate('Page2')}>
           <  MaterialCommunityIcons name='arrow-right-circle' color={'#e0517d'} size={30} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  }

  if (showRealApp) {
    return <App />;
  } else {
    return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone}/>;
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 40,
  },
});

export default App;
