import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Cart from './screens/Cart';
import ProductDetails from './screens/ProductDetails';
import SplashScreen from 'react-native-splash-screen';
import {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  // useEffect(()=>{
  //   SplashScreen.hide()
  // }, [])
  const [loaded, setLoaded] = useState(false);
  const animationRef = useRef<LottieView>(null);
  if (loaded == false) {
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          ref={animationRef}
          source={require('./assets/Animation.json')}
          autoPlay
          style={{height: 400, width: 300}}
          loop={false}
          // resizeMode="cover"
          onAnimationFinish={() => {
            console.log('animation finished');
            setLoaded(true);
          }}
        />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={BottomTabNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}