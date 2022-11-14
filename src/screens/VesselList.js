import React, {useContext, useMemo} from 'react';
import {View, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import {ListItem, Avatar} from '@react-native-material/core';

import {AuthContext} from '../../context/AuthContext';

const VesselList = () => {

    const {allVessel} = useContext(AuthContext);
    


  return (
    <ScrollView>
        {allVessel.map((e, index) => {
          return (
            <ListItem
              key={index}
              leading={<Avatar label={e.shipname} size={38} />}
              title={e.shipname + ' (' + e.shipcode + ')'}
              secondaryText={'IMO : ' + e.imo}
              //onPress={() => getVslDetails(e.ploioname)}
            />
          );
        })}
     </ScrollView>
  );
};

export default VesselList;