import React, {useContext} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {ListItem, Avatar} from '@react-native-material/core';

import {AuthContext} from '../context/AuthContext';
import VesselDtls from './VesselDtls';
import Navigation from '../components/Navigation';

const VesselList = ({navigation}) => {
  const {allVessel} = useContext(AuthContext);
  console.log(allVessel,"to all vessel")
  return (
    <ScrollView>
      <View>
        <Text>Active Vessels : {allVessel.length} </Text>
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
