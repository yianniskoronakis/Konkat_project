import React, {useContext, useState} from 'react';
import {StyleSheet,Text,View,ScrollView,Image,ActivityIndicator} from 'react-native';
import {ListItem,Avatar} from '@react-native-material/core';
import {AuthContext} from '../context/AuthContext';


const VesselDtls = ({route}) => {
  const {allVessel} = useContext(AuthContext);
  const ship = route.params.ship
  const ship1 = allVessel.filter(element=>{
    return element.shipname.replace(/\s+/g, '')==ship.replace(/\s+/g, '')})

        return (
          <>
          {ship1[0] && (
            <ScrollView>
            <View style={styles.body}>
              <View style={styles.header}>
                <Text style={styles.scode}>{ship1[0].shipname} </Text>
              </View>
              <View style={styles.bodyContent}>
                <ListItem title="Name" secondaryText={ship1[0].shipname} />
                <ListItem title="System Name" secondaryText={ship1[0].shipname} />
                <ListItem title="ShipCode" secondaryText={ship1[0].shipcode} />
                <ListItem title="IMO" secondaryText={ship1[0].imo} />
                <ListItem title="On Board" secondaryText={ship1[0].onboard} />
              </View>
              </View>
            </ScrollView>
          )}
          
          </>
        )
}

const styles = StyleSheet.create({
  scode: {
    fontSize: 20,
    color: 'white',
    marginBottom:10,
    paddingTop:10,
    alignItems: 'center',
    fontWeight: '600',
  },
  header: {
    height: 100,
    marginBottom:20,
    backgroundColor:'#343d67',
    alignItems: 'center',
    justifyContent: 'center',

  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    marginBottom:10,
    borderWidth: 4,
    backgroundColor: '#00BFFF',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 80,
  },
  name: {
    fontSize: 12,
    color: '#FFFFFF',
    alignItems: 'center',
    fontWeight: '600',
  },

  body: {
    marginTop: 40,
    flex:1

  },
  bodyContent: {
    color: '#FFFFFF',
    marginTop: 0,
   
    padding: 30,
  },
  name: {
    fontSize: 22,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
});


export default VesselDtls