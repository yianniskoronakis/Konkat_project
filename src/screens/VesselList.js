import React, {useContext} from 'react';
import {ScrollView, View, Text,StyleSheet} from 'react-native';
import {ListItem} from '@react-native-material/core';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../context/AuthContext';

const VesselList = ({navigation}) => {
  const {allVessel , getVslDtls} = useContext(AuthContext);
   
   const goToVslDtls = (unid) => {
    
    getVslDtls(unid)

    navigation.navigate('Vessel Details')

  }

  //

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
            onPress={() => goToVslDtls(e.unId)
             }
          />
        );
      })}

    </ScrollView>
  );
};

export default VesselList;
