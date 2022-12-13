import React, {useContext} from 'react';
import {ScrollView, View, Text,StyleSheet} from 'react-native';
import {ListItem} from '@react-native-material/core';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../context/AuthContext';

const VesselList = ({navigation}) => {
  const {allVessel} = useContext(AuthContext);
  return (
    <ScrollView >
      <View  >
        <Text style={{color:'343d67'}}>Active Vessels : {allVessel.length} </Text>
      </View>
      {allVessel.map((e, index) => {
        return (
         
          <ListItem
            title={e.shipname + ' (' + e.shipcode + ')'}
            secondaryText={'IMO : ' + e.imo + ' | On Board :' + e.onboard}
            onPress={() => 
            navigation.navigate('Vessel Details',{ship:e.shipname}) }
          />
        );
      })}

    </ScrollView>
  );
};

export default VesselList;
