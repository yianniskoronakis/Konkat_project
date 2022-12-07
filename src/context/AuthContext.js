import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState, useContext} from 'react';

import {VslCrewScreen} from '../screens/CrewList';

import {BASE_URL} from '../config';

export const AuthContext = createContext();


export const AuthProvider = ({children, navigation}) => {

  const {selected} = useState(VslCrewScreen);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [allVessel, setAllVessel] = useState([]);
  const [vslCrew, setVslCrew] = useState([]);
  const [seamenDtls, setSeamenDtls] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [SeamenServices, setSeamenServices] = useState([]);

  
  useEffect(() => {
    isLoggedIn();
  }, []);

  const getAllVessel = token => {
    setIsLoading(true);

  

    let access_token =
      userInfo.bearer != undefined ? userInfo.bearer : token.bearer;

    axios
      .get(`${BASE_URL}/lists/vwship1?dataSource=crewrest`, {
        headers: {Authorization: `Bearer ${access_token}`},
      })
      .then(res => {
        setAllVessel(res.data);

        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        console.log(`login error ${e}`);
      });
  };

  const login = (userName, password) => {
    setIsLoading(true);
    axios
      .post(
        `${BASE_URL}/auth`,
        {
          username: userName,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        let userInfo = res.data;

        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        isLoggedIn();
        setErrorMsg('');

        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setErrorMsg(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('userInfo');
    setUserInfo({});
    setIsLoading(false);
    setAllVessel([]);
    setVslCrew([]);
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);

        getAllVessel(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  const getVesselCrewlist = selected => {
    setIsLoading(true);
 

    let access_token = userInfo.bearer != undefined ? userInfo.bearer : token.bearer;
    let vslId = selected;

    axios
      .get(
         `${BASE_URL}/lists/vwservicedisplay?dataSource=crewrest&key=${vslId}`,
        {
          headers: {Authorization: `Bearer ${access_token}`},
        },
      )
      .then(res => {
        
        setVslCrew(res.data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(` getVesselCrewlist error ${e}`);
        setIsLoading(false);
      });
  };

  const getSeamenDtls = sailorcode => {
    let access_token = userInfo.bearer;

    let body = JSON.stringify({"maxScanDocs": 500000,
    "maxScanEntries": 200000,
    "mode": "default",
    "noViews": false,
    "query": `form = 'crew4' and sailorcode = ${sailorcode}`,
    "timeoutSecs": 300,
      "variables": {
      "sailc": 13567
    },
     "viewRefresh": true})

    axios
      //.get(`${BASE_URL}/lists/V_SEAMEN_DTLS?dataSource=test&key=${sailorcode}`, {
        .post(`${BASE_URL}/query?dataSource=crewrest&action=execute`,
        body,
       {
        headers: {Authorization: `Bearer ${access_token}`,'Content-Type':'application/json'},
      })
      .then(res => {
        setSeamenDtls(res.data);
        console.log(res.data,"DOULEUEI RE")
      })
      .catch(e => {
        console.log(` getSeamenDtls error ${e}`);
      });
  };

  const getSeamenServices = sailorcode => {
    let access_token = userInfo.bearer;

    let body = JSON.stringify({"maxScanDocs": 500000,
    "maxScanEntries": 200000,
    "mode": "default",
    "noViews": false,
    "query": `form = 'crew14' and Sailorcode = 13567`,
    "timeoutSecs": 300,
     "viewRefresh": true})

    axios
      //.get(`${BASE_URL}/lists/V_SEAMEN_DTLS?dataSource=test&key=${sailorcode}`, {
        .post(`${BASE_URL}/query?dataSource=crewrest&action=execute`,
        body,
       {
        headers: {Authorization: `Bearer ${access_token}`,'Content-Type':'application/json'},
      })
      .then(res => {
        setSeamenDtls(res.data);
        console.log(res.data,"DOULEUEI RE")
      })
      .catch(e => {
        console.log(` getSeamenServices error ${e}`);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        getAllVessel,
        getVesselCrewlist,
        login,
        logout,
        vslCrew,
        allVessel,
        getSeamenDtls,
        getSeamenServices,
        seamenDtls,
        errorMsg,
      }}>
      {children}
    </AuthContext.Provider>
  );
};