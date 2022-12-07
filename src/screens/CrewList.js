import React, {useContext, useEffect, useState} from 'react';
import {View, ScrollView,Text} from 'react-native';
import {ListItem, Avatar,} from '@react-native-material/core';
import {Appbar, Button} from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';

import {AuthContext} from '../context/AuthContext';

const VslCrewScreen = ({navigation}) => {

  const {vslId,getVesselCrewlist,allVessel,vslCrew, getSeamenDtls} = useContext(AuthContext);
  const [selected, setSelected] = useState(undefined);
  const [vslData, setVslData] = useState([]);
  
  const data = [];
   allVessel.map((e,i) => {
    data.push({key : String(i+1),value:e.shipname, name:e.ploioname});
    })

  const getSeamenDetails = unid => {
    getSeamenDtls(unid);
    navigation.navigate('Seaman Dtls');
  }; 
  const getSeamenServices = unid => {
    getSeamenDtls(unid);
    navigation.navigate('Seaman Services');
  }; 
  return (

    <View>
      <SelectList 
        setSelected={(val) => {
          console.log(val,"to valllllllll")
          const found = data.find(element => element.value==val);
          setSelected(found.name)
        }} 
        data={data} 
        save="value"
    />
      <Button  textColor='white' style={{borderRadius:10,backgroundColor:'#00BFFF'}} onPress={() => {
        getVesselCrewlist(selected)}} >
        Find
        </Button>
      <ScrollView>
        {vslCrew.map((e, index1) => {
          return (
            <>
            <View>
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
              
              onPress={() => {
                console.log(e.sailorcode,"TO SEILAOR CODE")
                getSeamenDetails(Math.floor(e.sailorcode))}}
              
              //trailing={<Icon name="chevron-right" />}
            />
            <View style={{flex:2,flexDirection: "row", padding:12, justifyContent: 'space-evenly'}}><Text>
            <Button key={index1+1} color="cyan" onPress={() => {
              console.log(e.sailorcode,"TO SEILAOR CODE")
              getSeamenServices(Math.floor(e.sailorcode))}} >
              Services
              </Button>
              <Button key={index1+2} color="cyan" onPress={() => {
              console.log(e.sailorcode,"TO SEILAOR CODE")
              getSeamenDetails(Math.floor(e.sailorcode))}} >
              Details
              </Button>
              </Text></View>
              </View>
              </>
          );
        })}
      </ScrollView>
    </View>
    
  );
};



export default VslCrewScreen;

