import React, {useContext, useEffect} from 'react';
import {StyleSheet,Text,View,ScrollView} from 'react-native';
import {ListItem, Avatar,} from '@react-native-material/core';
import {AuthContext} from '../context/AuthContext';
import {Appbar} from 'react-native-paper';


const SeamenDtls = ({navigation}) => {

      const {seamenDtls} = useContext(AuthContext);

        return (
          <>
          {seamenDtls.map((e,index) => 
            <>
              <View style={styles.header}></View>
              <Avatar style={styles.avatar} label={e.fullName} size={38} />
              <View style={styles.body}>
                <View style={styles.header}>
                  {/* <Text style={styles.name}>{e.fullName}</Text> */}
                  <Text style={styles.scode}>{parseInt(e.sailorcode)}</Text>
                </View>
                <View style={styles.bodyContent}>
                  <ListItem title="Name" secondaryText={e.fullName} />
                  <ListItem title="Rank" secondaryText={e.Sspeciality_e} />
                  <ListItem title="Nationality" secondaryText={e.national} />
                  <ListItem title="Birthdate" secondaryText={e.birthdate} />
                  <ListItem title="Birthplace" secondaryText={e.birthplace} />
                </View>
              </View>
          </>
          
          )
          }
          </>
        )
      
  
      
}

const styles = StyleSheet.create({
  scode: {
    fontSize: 16,
    color: '#696969',
    alignItems: 'center',
    fontWeight: '600',
  },
  header: {
    // backgroundColor: '#00BFFF',
    height: 100,
    marginTop: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
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
  },
  bodyContent: {
    color: '#FFFFFF',
    marginTop: -50,
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


export default SeamenDtls