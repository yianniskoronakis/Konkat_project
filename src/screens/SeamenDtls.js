import React, {useContext, useState} from 'react';
import {StyleSheet,Text,View,ScrollView,Image,ActivityIndicator} from 'react-native';
import {ListItem,Avatar} from '@react-native-material/core';
import {AuthContext} from '../context/AuthContext';


const SeamenDtls = ({navigation}) => {
  const {seamenDtls,seamanImg,isLoading} = useContext(AuthContext);
  var base64Icon = `data:image/png;base64,${seamanImg}`;
        return (
          <>
          <ScrollView>
          {seamenDtls ? seamenDtls.map((e,index) =>
          <>
               <View style={styles.body}>
                 <View style={styles.header}>
                   <Text style={styles.scode}>{e.fname_e} {e.lname_e} </Text>
                   <Avatar color='#00BFFF' image={{uri: base64Icon}} size={100} style={{justifyContent: 'center',
                      alignItems: 'center', left: 0, right: 0, bottom: 4}}/>
                 </View>
                 <View style={styles.bodyContent}>
                   <ListItem title="Name" secondaryText={e.fname_e} />
                   <ListItem title="Last" secondaryText={e.lname_e} />
                   <ListItem title="Speciality" secondaryText={e.speciality_e} />
                   <ListItem title="Sailor Code" secondaryText={e.sailorcode} />
                   <ListItem title="Embarkation Date" secondaryText={e.Edate} />
                   {e.Adate=="2099-01-01" ?
                     <ListItem title="Currently On-Board" />
                        :   <ListItem title="Embarkation Date" secondaryText={e.Edate} />} 
                 </View>
                 </View>
                 </>
                 
          ):<View style={styles.body}><Text>.</Text></View>
          }
          </ScrollView>
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
    backgroundColor:'#00BFFF',
    alignItems: 'center',
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


export default SeamenDtls