import React, {useContext} from 'react';
import { ScrollView} from 'react-native';
import {ListItem, Avatar} from '@react-native-material/core';

import {AuthContext} from '../context/AuthContext';

const VesselList = () => {

    const {allVessel} = useContext(AuthContext);
    

  return (
    <ScrollView>
        {allVessel.map((e, index) => {
          
          return (
            <ListItem
              key={index}
              leading={<Avatar label={e.shipname } size={38} style={{backgroundColor:'#00BFFF'}}/>}
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
