import { createDrawerNavigator } from '@react-navigation/drawer';
import Page3 from '../screen/Page3';
import Page4 from '../screen/Page4';
import Page5 from '../screen/Page5';
import Customdrawer from './Customdrawer';

const Drawer = createDrawerNavigator();

 export default function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Customdrawer {...props} />} screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={Page3} />
  
    </Drawer.Navigator>
  );
}