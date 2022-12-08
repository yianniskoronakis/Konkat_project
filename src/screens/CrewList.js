import React, {useContext, useEffect, useState} from 'react';
import {View, ScrollView,Text} from 'react-native';
import {ListItem, Avatar,} from '@react-native-material/core';
import { Button} from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import {AuthContext} from '../context/AuthContext';

const VslCrewScreen = ({navigation}) => {

  const {getVesselCrewlist,allVessel,vslCrew, getSeamenDtls,getSeamenServices} = useContext(AuthContext);
  const [selected, setSelected] = useState(undefined);
  
  const data = [];
   allVessel.map((e,i) => {
    data.push({key : String(i+1),value:e.shipname, name:e.ploioname});
    })

  const getSeamenDetailsHelper = unid => {
    console.log(unid,"sto crewlist function")
    getSeamenDtls(unid);
    navigation.navigate('Seaman Dtls');
  }; 
  const getSeamenServicesHelper = unid => {
    getSeamenServices(unid);
    navigation.navigate('Seaman Services');
  }; 
  return (

    <View style={{padding:10}}>
      <View style={{border:10}}>
      <SelectList 
        setSelected={(val) => {
          console.log(val,"to valllllllll")
          const found = data.find(element => element.value==val);
          setSelected(found.name)
        }} 
        data={data} 
        save="value"
    />
      <Button  color='#FFFFFF' style={{borderWidth: 1,borderColor: "thistle",marginTop:10,marginBottom:12,border:10,backgroundColor:'#00BFFF'}} onPress={() => {
        getVesselCrewlist(selected)}} >
        Find
        </Button>
        </View>
      <ScrollView>
        {vslCrew.map((e, index1,index2,index3) => {
          return (
            <>
            <View  style={{borderWidth: 1,borderColor: "thistle",marginTop:10,marginBottom:12,border:10}}>
            <ListItem 
              key={index1}
              leading={<Avatar label={e.fullName} size={38} style={{backgroundColor:'#00BFFF'}}/>}
              title={e.fullName}
              secondaryText={
                'Speciality :' +
                e.Sspeciality +
                ' - Nationality : ' +
                e.national
                
              }
            />
            <View style={{flex:2,flexDirection: "row", padding:12, justifyContent: 'space-evenly'}}><Text>
            <Button key={index2} color="#00BFFF" onPress={() => {
              console.log(e.sailorcode,"TO SEILAOR CODE")
              getSeamenServicesHelper(Math.floor(e.sailorcode))}} >
              Services
              </Button>
              <Button key={index3} color="#00BFFF" onPress={() => {
              console.log(e['@unid'],"to unid")
              getSeamenDetailsHelper(e['@unid'])}} >
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

