import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, Image, ScrollView, View} from 'react-native';
import {ListItem, Avatar} from '@react-native-material/core';
import {AuthContext} from '../context/AuthContext';

const SeamenServices = () => {
  const {seamenServices} = useContext(AuthContext);

  var adatehelper = '';
  var serviceColor = '';
  console.log(seamenServices)
  return (
    <View>
      {seamenServices[0] && (
      <ListItem
        title={`${seamenServices[0].lname_e} ${seamenServices[0].fname_e}`}
        secondaryText={'Services : ' + seamenServices.length}
      />
      )}
      <ScrollView>
        {seamenServices.map((e, index) => {
          if (e.ADate === '2099-01-01') {
            adatehelper = 'On Board';
            serviceColor = 'green';
          } else {
            adatehelper = 'Sign Off: ' + e.ADate;
            serviceColor = 'red';
          }
          return (
            <ListItem
              key={index}
              leading={
                <Avatar
                  color={serviceColor}
                  image={require('../assets/whitesailor.png')}
                  size={38}
                  style={{borderRadius: 10}}
                />
              }
              title={
                'Ship Name: ' +
                e.shipname +
                '\n' +
                adatehelper +
                '\n' +
                'Sign On: ' +
                e.Edate +
                '\n' +
                'Speciality: ' +
                e.Sspeciality_e
              }
              secondaryText={'ID:' + e.lastidYphresias}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scode: {
    fontSize: 16,
    color: '#696969',
    alignItems: 'center',
    fontWeight: '600',
  },
  header: {
    backgroundColor: '#00BFFF',
    height: 100,
    marginTop: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    backgroundColor: '#00BFFF',
    marginBottom: 0,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 0,
  },
  name: {
    fontSize: 12,
    color: '#FFFFFF',
    alignItems: 'center',
    fontWeight: '600',
  },

  body: {
    marginTop: 40,
  },
  bodyContent: {
    color: '#FFFFFF',
    marginTop: -50,
    padding: 30,
  },
  name: {
    fontSize: 22,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
});
export default SeamenServices;
