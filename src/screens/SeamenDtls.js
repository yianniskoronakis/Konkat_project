import React, {useContext, useEffect} from 'react';
import {StyleSheet,Text,View,ScrollView} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {Appbar} from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { ListItem } from "@react-native-material/core";


const SeamenDtls = ({navigation}) => {
  const {seamenDtls} = useContext(AuthContext);
  
  // if(seamenDtls){
  //   console.log(seamenDtls,"ta details sto seamen comp")
  // }


        return (
          <>
          <ScrollView>
          {seamenDtls ? seamenDtls.map((e,index) =>
          <>
               <View style={styles.body}>
                 <View style={styles.header}>
                   <Text style={styles.scode}>{e.fname_e},{e.lname_e}</Text>
                 </View>
                 <View style={styles.bodyContent}>
                   <ListItem title="Name" secondaryText={e.Fname_e} />
                   <ListItem title="Rank" secondaryText={e.lastEidikothta} />
                   <ListItem title="Last Id Yphresias" secondaryText={e.lastidYphresias} />
                   <ListItem title="Birthdate" secondaryText={e.status} />
                   <ListItem title="Birthplace" secondaryText={e.birthplace} />
                 </View>
                 </View>
                 </>
                 
          ):<Text>f34g34g</Text>
          }
          </ScrollView>
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