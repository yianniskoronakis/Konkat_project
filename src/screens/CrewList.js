import React, {useContext, useMemo} from 'react';
import { Text,ScrollView} from 'react-native';
import {ListItem, Avatar} from '@react-native-material/core';

import {AuthContext} from '../context/AuthContext';

const CrewList = () => {
  const {vslCrew} = useContext(AuthContext);

 
  console.log(vslCrew,"VESSEL CREWWWWWWWWWWWWWWWWWW")
  console.log("asa")
  return (
    <Text>ea</Text>
      // <ScrollView>
      //   {vslCrew.map((e, index) => {
      //     return (
      //       <ListItem
      //         key={index}
      //         leading={<Avatar label={e.fullName} size={38} />}
      //         title={e.fullName}
      //         secondaryText={
      //           'Speciality :' +
      //           e.Sspeciality +
      //           ' - Nationality : ' +
      //           e.national
      //         }
      //         onPress={() => getSeamenDetails(e['@unid'])}
      //         //trailing={<Icon name="chevron-right" />}
      //       />
      //     );
      //   })}
      // </ScrollView>
  );
};

export default CrewList;