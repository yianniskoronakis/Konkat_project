import React, {useContext, useEffect, useState} from 'react';
import {View, ScrollView,} from 'react-native';
import {ListItem, Avatar,} from '@react-native-material/core';
import {Appbar, Button} from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';

import {AuthContext} from '../context/AuthContext';

const VslCrewScreen = ({navigation}) => {

  const {vslId,getVesselCrewlist,allVessel,vslCrew, getSeamenDtls} = useContext(AuthContext);
  const [selected, setSelected] = useState(undefined);
  const [vslData, setVslData] = useState([]);
  //const [data, setData] = useState([]);
 
  const data = [];
   allVessel.map((e,i) => {
    data.push({key : String(i+1),value:e.shipname, name:e.ploioname});
    })

  const getSeamenDetails = unid => {
    getSeamenDtls(unid);
    navigation.navigate('SeamenDtls');
  }; 
 
  return (

    <View>
       <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header> 
      <SelectList 
        setSelected={(val) => {
          const found = data.find(element => element.value==val);
          setSelected(found.name)}} 
        data={data} 
        save="value"
    />
      <Button  onPress={() => {
        getVesselCrewlist(selected)}} >
        COMMIT
        </Button>
      <ScrollView>
        {vslCrew.map((e, index1) => {
          return (
            <ListItem
              key={index1}
              leading={<Avatar label={e.fullName} size={38} />}
              title={e.fullName}
              secondaryText={
                'Speciality :' +
                e.Sspeciality +
                ' - Nationality : ' +
                e.national
                
              }
              
              onPress={() => getSeamenDetails(e.unid)}
              
              //trailing={<Icon name="chevron-right" />}
            />
          );
        })}
      </ScrollView>
    </View>
    
  );
};



export default VslCrewScreen;

