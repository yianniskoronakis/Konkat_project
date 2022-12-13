import React, {useContext} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {ListItem, Avatar} from '@react-native-material/core';
import {AuthContext} from '../context/AuthContext';

const SeamenServices = () => {
  const {seamenServices,isLoading} = useContext(AuthContext);

  var adatehelper = '';
  var serviceColor = '';
  return (
    <View>
      {seamenServices[0] && (
        <>
      <ListItem style={styles.header}
      color='#343d67'
        title={`${seamenServices[0].lname_e} ${seamenServices[0].fname_e}`}
        secondaryText={'Services : ' + seamenServices.length}
      />
      
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
                  // image={require('../assets/whitesailor.png')}
                  size={28}
                  // style={{borderRadius: 10}}
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
      </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  
  header: {
    height: 100,
    marginTop: 10,
    alignItems: 'center',
  },
 
  
});
export default SeamenServices;
