import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../context/AuthContext';

const HomeScreen = ({navigation}) => {
  const {isLoading, clearState} = useContext(AuthContext);

  const getCrew = () => {
    clearState();

    navigation.navigate('Crew');
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <TouchableOpacity
        style={styles.buttonGPlusStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Vessel')}>
        <LinearGradient
          colors={['#00BFFF', '#0086b3', '#192f6a']}
          style={styles.linearGradient}>
          <Image
            source={require('../assets/whiteship.png')}
            style={styles.buttonImageIconStyle}
          />

          <Text style={styles.buttonTextStyle}>VESSELS</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonGPlusStyle}
        activeOpacity={0.5}
        onPress={() => getCrew()}>
        <LinearGradient
          colors={['#00BFFF', '#0086b3', '#192f6a']}
          style={styles.linearGradient}>
          <Image
            source={require('../assets/whitesailor.png')}
            style={styles.buttonImageIconStyle}
          />

          <Text style={styles.buttonTextStyle}>CREW</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonGPlusStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 5,
    borderColor: '#fff',
    height: 200,
    borderRadius: 25,
    margin: 15,
  },
  buttonImageIconStyle: {
    padding: 30,
    margin: 15,
    height: 90,
    width: 90,
    color: 'white',
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    fontWeight: '90000000',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 90,
  },
});

export default HomeScreen;
