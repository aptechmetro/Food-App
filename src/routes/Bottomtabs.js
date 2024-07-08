import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Page3 from '../screen/Page3';
import Page4 from '../screen/Page4';
import Page5 from '../screen/Page5';
import MyDrawer from './Drawer';



const Tab = createBottomTabNavigator();

export default function MyBottomtab() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#f7037c",
      tabBarLabelStyle: {
        fontSize: 16,
        paddingBottom: 5


      },
      tabBarStyle: { padding: 5, height: 70 },

    }}>
      <Tab.Screen name="Home" component={MyDrawer}

        options={
          {
            tabBarIcon: ({ focused }) => {
              return (
                <Fontisto name="home" color={focused ? "#e0517d" : "black"} size={30} />
              )
            },

          }
        } />
      <Tab.Screen name="Recipes" component={Page4}
        options={
          {
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons name="chef-hat" color={focused ? "#e0517d" : "black"} size={30} />
              )
            },

          }
        }

      />



      <Tab.Screen name="Recipes Book" component={Page5}
        options={
          {
            tabBarIcon: ({ focused }) => {
              return (
                <SimpleLineIcons name="notebook" color={focused ? "#e0517d" : "black"} size={25} />
              )
            },

          }
        }
      />


    </Tab.Navigator>
  );
}