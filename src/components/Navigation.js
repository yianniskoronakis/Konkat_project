import {useContext} from "react";

import { NavigationContainer ,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthContext"
import SplashScreen from "../screens/SplashScreen";
import {
  Button,Text
} from 'react-native';
import {StatusBar} from 'react-native';
import VesselList from "../screens/VesselList";
import CrewList from "../screens/CrewList";
import SeamenDtls from "../screens/SeamenDtls";
import SeamenServices from "../screens/SeamenServices";
import VesselDtls from "../screens/VesselDtls";

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Navigation = () =>  {
    const {userInfo, splashLoading,logout} = useContext(AuthContext);
    return (
        <NavigationContainer >
          <Stack.Navigator > 
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
                      <Text style={{color:'white',marginRight:10}}>{userInfo.claims.names[1]}</Text>
                      <Button title="Logout" color="red" onPress={logout}/>
                  </>
                  ),headerStyle: {
                    backgroundColor: '#343d67',
                  },headerTintColor: '#fff',
                }}
                /> 
                <Stack.Screen 
                  name="Vessel"
                  component={VesselList}
                /> 
                <Stack.Screen 
                  name="Crew"
                  component={CrewList}
                /> 
                <Stack.Screen 
                  name="Seaman Dtls"
                  component={SeamenDtls}
                /> 
                 <Stack.Screen 
                  name="Seaman Services"
                  component={SeamenServices}
                /> 
                  <Stack.Screen 
                  name="Vessel Details"
                  component={VesselDtls}
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