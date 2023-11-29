import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './scr/screens/SplashScreen';
import OnboardingStarter from './scr/screens/OnboardingStarter';
import LoginOrRegister from './scr/screens/LoginOrRegister';
import RegisterAs from './scr/screens/RegisterAs';
import LoginScreen from './scr/screens/LoginScreen';
import { SCREEN } from './scr/enums/AppEnums';
const Stack = createNativeStackNavigator();
const App = () => {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log('Starting loading...');
    setLoading(true);
    setTimeout(() => {
      console.log('Loading finished.');
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={loading ? 'SplashScreen' : 'OnboardingStarter'}  >
        <Stack.Screen options={{ headerShown: false }} name={SCREEN.LOGIN} component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name={SCREEN.ONBORDING} component={ OnboardingStarter} />
        <Stack.Screen options={{ headerShown: false }} name={SCREEN.LOGINOREGISTER} component={LoginOrRegister} />
        <Stack.Screen options={{ headerShown: false }} name={SCREEN.REGISTER} component={RegisterAs} />

      


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;