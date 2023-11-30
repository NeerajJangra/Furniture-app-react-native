import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Cart from './screens/Cart';
import ProductDetails from './screens/ProductDetails';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Bottom Navigation' component={BottomTabNavigation} options = {{headerShown: false}}/>
      <Stack.Screen name='Cart' component={Cart} options = {{headerShown: false}}/>
      <Stack.Screen name='Product Details' component={ProductDetails} options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


