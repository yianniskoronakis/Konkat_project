import React, {useContext, useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {ListItem, Avatar} from '@react-native-material/core';
import {Button} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';
import {AuthContext} from '../context/AuthContext';
import {decode as atob, encode as btoa} from 'base-64';

const VslCrewScreen = ({navigation}) => {
  const {
    getVesselCrewlist,
    allVessel,
    vslCrew,
    getSeamenDtls,
    crewNumber,
    getSeamenServices,
  } = useContext(AuthContext);
  const [selected, setSelected] = useState(undefined);
  const [helper, setHelper] = useState();
  const data = [];

  allVessel.map((e, i) => {
    data.push({key: String(i + 1), value: e.shipname, name: e.ploioname});
  });

  const getSeamenDetailsHelper = unid => {
    getSeamenDtls(unid);
    navigation.navigate('Seaman Dtls');
  };
  const getSeamenServicesHelper = unid => {
    getSeamenServices(unid);
    navigation.navigate('Seaman Services');
  };
  return (
    <View style={{padding: 10}}>
      <View style={{border: 10}}>
        <SelectList
          setSelected={val => {
            const found = data.find(element => element.value == val);
            setSelected(found.name);
          }}
          data={data}
          save="value"
        />
        <Button
          color="#FFFFFF"
          style={{
            borderWidth: 1,
            borderColor: 'thistle',
            marginTop: 10,
            marginBottom: 12,
            border: 10,
            backgroundColor: '#00BFFF',
          }}
          onPress={() => {
            getVesselCrewlist(selected);
          }}>
          Find
        </Button>
      </View>
      <ScrollView>
        {vslCrew.map((e, index1, index2, index3) => {
          return (
            <>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'thistle',
                  marginTop: 10,
                  marginBottom: 12,
                  border: 10,
                }}>
                <ListItem
                  key={index1}
                  leading={
                    <Avatar
                      label={e.lname_e}
                      size={38}
                      style={{backgroundColor: '#00BFFF'}}
                    />
                  }
                  title={`${e.lname_e} ${e.fname_e}`}
                  secondaryText={
                    'Speciality : ' +
                    e.Sspeciality_e +
                    '\n' +
                    'Nationality : ' +
                    e.national_e
                  }
                />
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    padding: 12,
                    justifyContent: 'space-evenly',
                  }}>
                  <Text>
                    <Button
                      key={index2}
                      color="#00BFFF"
                      onPress={() => {
                        console.log(e.sailorcode, 'TO SEILAOR CODE');
                        getSeamenServicesHelper(Math.floor(e.sailorcode));
                      }}>
                      Services
                    </Button>
                    <Button
                      key={index3}
                      color="#00BFFF"
                      onPress={() => {
                        getSeamenDetailsHelper(parseInt(e.sailorcode));
                      }}>
                      Details
                    </Button>
                  </Text>
                </View>
              </View>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default VslCrewScreen;
