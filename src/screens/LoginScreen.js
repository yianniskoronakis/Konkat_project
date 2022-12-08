import React, {useContext, useState} from 'react';
import {Button, TextInput, View, Image, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import {Stack, Avatar} from '@react-native-material/core';
import avinLogo from '../img/logoAvinLite.png';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);

  const styles1 = StyleSheet.create({
    container: {
      padding: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Stack style={styles1.container}>
        <Image style={styles1.logo} source={avinLogo} />
      </Stack>

      <Spinner visible={isLoading} />

      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Enter username"
          onChangeText={text => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="Login"
          color="#343d67"
          onPress={() => {
            login(username, password);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    color: '#00BFFF',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#BBB',

    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: '#FF0000',
  },
});

export default LoginScreen;
