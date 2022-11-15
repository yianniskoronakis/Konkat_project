import React, { useContext } from "react";
import { View, StyleSheet,Button,Text, TouchableOpacity,Image } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
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
                <View style={styles.buttonIconSeparatorStyle} />
                <Text style={styles.buttonTextStyle}>
                    Vessels
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonGPlusStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Crew')} >
                <Image
                    source={require('../assets/crew.jpg')}
                    style={styles.buttonImageIconStyle}
                />
                <View style={styles.buttonIconSeparatorStyle} />
                <Text style={styles.buttonTextStyle}>
                    Crew
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
      },
      buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#396d7c',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 100,
        borderRadius: 5,
        margin: 5,
      },
      buttonImageIconStyle: {
        padding: 30,
        margin: 25,
        height: 35,
        width: 35,
        resizeMode: 'stretch',
      },
      buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 75,
      },
      buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 90,
      },
});

export default HomeScreen;