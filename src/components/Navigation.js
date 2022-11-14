import {useContext} from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext"
import SplashScreen from "../screens/SplashScreen";
import {
  Button,Text
} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () =>  {
    const {userInfo, splashLoading,logout} = useContext(AuthContext);
    return (
        <NavigationContainer>
          <Stack.Navigator>
            {splashLoading ? (
              <Stack.Screen
                name="Splash Screen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
            ) : userInfo.bearer ? (
              <>
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{
                    headerRight: () => (
                      <>
                      <Text style={{marginRight:50}}>Welcome {userInfo.claims.names[1]}</Text>
                      <Button title="Logout" color="red" onPress={logout}/>
                  </>
                  )}}
                />  
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{headerShown: false}}
                />
              </>
            ) 
            }
          </Stack.Navigator>
        </NavigationContainer>
      );
    };
 
    export default Navigation;