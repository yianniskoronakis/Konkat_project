import React, {useContext} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {ListItem, Avatar} from '@react-native-material/core';

import {AuthContext} from '../context/AuthContext';

const VesselList = () => {
  const {allVessel} = useContext(AuthContext);

  return (
    <ScrollView>
      <View>
        <Text>Active Vessels : {allVessel.length} </Text>
      </View>

      {allVessel.map((e, index) => {
        return (
          <ListItem
            title={e.shipname + ' (' + e.shipcode + ')'}
            secondaryText={'IMO : ' + e.imo + ' # On Board :' + e.onboard}
            //onPress={() => getVslDetails(e.ploioname)}
          />
        );
      })}
    </ScrollView>
  );
};

export default VesselList;
