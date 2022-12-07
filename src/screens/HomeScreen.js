import React, { useContext } from "react";
import { View, StyleSheet,Button,Text, TouchableOpacity,Image } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { black, white } from "react-native-paper/lib/typescript/styles/colors";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = ({navigation}) =>  {
    const {isLoading} = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <Spinner visible={isLoading}/>
            <TouchableOpacity
                style={styles.buttonGPlusStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Vessel')} >
                <Image
                    source={require('../assets/ship.png')}
                    style={styles.buttonImageIconStyle}
                    
                />
                
                <Text style={styles.buttonTextStyle}>
                    VESSELS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonGPlusStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Crew')} >
                <Image
                    source={require('../assets/crew.png')}
                    style={styles.buttonImageIconStyle}
                />
                
                <Text style={styles.buttonTextStyle}>
                    CREW
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        margin: 10,
        marginTop: 30,
        padding: 30,
      },
      buttonGPlusStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00BFFF',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 150,
        borderRadius: 25,
        margin: 15,
        
      },
      buttonImageIconStyle: {
        padding: 30,
        margin: 25,
        height: 35,
        width: 35,
        color:'white',
        resizeMode: 'stretch',
      },
      buttonTextStyle: {
        color: 'white',
         textShadowColor: 'rgb(60, 60, 60) ',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
        marginBottom: 4,
        fontSize:20
      },
      buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 90,
      },
});

export default HomeScreen;