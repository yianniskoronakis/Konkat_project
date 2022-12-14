import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState, useContext} from 'react';
import {decode as atob} from 'base-64';
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
  const [crewCount, setCrewCount] = useState(0);
  const [seamenDtls, setSeamenDtls] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [seamenServices, setSeamenServices] = useState([]);
  const [seamanImg, setSeamanImg] = useState();
  const [crewNumber, setCrewNumber] = useState();
  const [count, setCount] = useState([]);
  const [scope,setScope] = useState([])
  const [vslDtls,setVslDtls] = useState([])
  
  useEffect(() => {
    isLoggedIn();
  }, []);

  const clearState = () => {
    setVslCrew([]);
  };

  const clearServices = () =>{
    setSeamenServices([])
  }

  const getVslOnBoard = (vslList, token) => {
    setAllVessel([]);
    getScope(token)
    
    let access_token =
      userInfo.bearer != undefined ? userInfo.bearer : token.bearer;
  
    vslList.sort().map(vslRows =>
      axios
        .get(
          `${BASE_URL}/lists/vwservice3?dataSource=crewrest&key=${vslRows['shipname']}`,
          {
            headers: {Authorization: `Bearer ${access_token}`},
          },
        )
        .then(res => {
          setAllVessel(setAllVessel => [
            ...setAllVessel,
            {
              shipcode: vslRows['shipcode'],
              ploioname: vslRows['ploioname'],
              imo: vslRows['imo'],
              shipname: vslRows['shipname'],
              onboard: res.data.length,
              unId: vslRows['@unid'],
            },
          ]);
        }),
    );
  };

  const getScope = (token) =>{
    setIsLoading(true)
    let access_token =
      userInfo.bearer != undefined ? userInfo.bearer : token.bearer;
    axios
    .get(`${BASE_URL}/scope/access?dataSource=crewrest`, {
      headers: {Authorization: `Bearer ${access_token}`},
    })
    .then(res => {
      
      setScope(res.data.Roles)
      
  
  setIsLoading(false)
    })
    .catch(e => {
      console.log(`scope error ${e}`);
      setIsLoading(false)

    });
  }



  const getVslDtls = (unid) =>{
    setVslDtls([])
    setIsLoading(true)


    let access_token =
      userInfo.bearer != undefined ? userInfo.bearer : token.bearer;

 
    axios
    .get(`${BASE_URL}//document/?unid=${unid}&dataSource=crewrest`, {
      headers: {Authorization: `Bearer ${access_token}`},
    })
    .then(res => {      
      setVslDtls(res.data)

    
      setIsLoading(false)
    })
    .catch(e => {
      console.log(`scope error ${e}`);
      setIsLoading(false)

    });
  }


  const getAllVessel = token => {
    setIsLoading(true);
    let access_token =
      userInfo.bearer != undefined ? userInfo.bearer : token.bearer;

    axios
      .get(`${BASE_URL}/lists/vwship1?dataSource=crewrest`, {
        headers: {Authorization: `Bearer ${access_token}`},
      })
      .then(res => {
        getVslOnBoard(res.data, token);

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

  const getVesselCrewlist = vslId => {
    setIsLoading(true);

    let access_token =
      userInfo.bearer != undefined ? userInfo.bearer : token.bearer;

    axios
      .get(
        `${BASE_URL}/lists/vwservicedisplay_en?dataSource=crewrest&key=${vslId}`,
        {
          headers: {Authorization: `Bearer ${access_token}`},
        },
      )
      .then(res => {
        setCrewNumber(res.data.length);
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

    setIsLoading(true);
    setSeamanImg();
    setSeamenDtls();

    let body = JSON.stringify({
      maxScanDocs: 500000,
      maxScanEntries: 200000,
      mode: 'default',
      noViews: false,
      query: `form = 'crew14' and sailorcode = ${sailorcode}`,
      timeoutSecs: 300,
      viewRefresh: true,
    });
    axios
      .post(`${BASE_URL}/query/?dataSource=crewrest&action=execute`, body, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        //console.log(res.data[0].foto.content,"den exw idea")
        let helper = atob(res.data[0].foto.content);
        let result = helper.split(/\r?\n/);
        let final = result[24];
        setSeamanImg(final);
        setSeamenDtls(res.data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(` getSeamenDtls error ${e}`);
        setIsLoading(false);
      });
  };

  const getSeamenServices = sailorcode => {
    let access_token = userInfo.bearer;
    setIsLoading(true);
    let body = JSON.stringify({
      maxScanDocs: 500000,
      maxScanEntries: 200000,
      mode: 'default',
      noViews: false,
      query: `form = 'crew4' and sailorcode = ${sailorcode}`,
      timeoutSecs: 300,
      viewRefresh: true,
    });

    axios
      .post(`${BASE_URL}/query?dataSource=crewrest&action=execute`, body, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setSeamenServices(res.data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(` getSeamenServices error ${e}`);
        setIsLoading(false);
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
        clearState,
        errorMsg,
        seamenServices,
        seamanImg,
        clearServices,
        crewNumber,
        getScope,
        scope,
        getVslDtls,
        vslDtls
      }}>
      {children}
    </AuthContext.Provider>
  );
};
