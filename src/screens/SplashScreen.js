import React from "react";
import { ActivityIndicator, View } from "react-native";

const SplashScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: "#343d67"}}>
            <ActivityIndicator size="large" color="#343d67" />
        </View>
    );
};

export default SplashScreen;