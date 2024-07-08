import { createStackNavigator } from '@react-navigation/stack';

import Getstarted from '../screen/Getstarted';
import Page2 from '../screen/Page2';
import Page3 from '../screen/Page3';
import Page4 from '../screen/Page4';
import Page5 from '../screen/Page5';
import Page6 from '../screen/Page6';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Getstarted'>
                <Stack.Screen name='Getstarted' component={Getstarted} />
                <Stack.Screen name='Page2' component={Page2} />
                <Stack.Screen name='Page3' component={Page3} />
                <Stack.Screen name='Page4' component={Page4} />
                <Stack.Screen name='Page5' component={Page5} />
                <Stack.Screen name='Page6' component={Page6} />
                <Stack.Screen name='Drawer' component={MyDrawer} />
                <Stack.Screen name='Bottomtab' component={MyBottomtab} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MyStack