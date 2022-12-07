import React from "react";
import { ActivityIndicator, View } from "react-native";

const SplashScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: "#00BFFF"}}>
            <ActivityIndicator size="large" color="#555" />
        </View>
    );
};

export default SplashScreen;