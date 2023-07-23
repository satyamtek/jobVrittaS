import { View, Text, SafeAreaView, Alert, ScrollView, Image, ImageBackground } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { headers } from '../../networking/config';
import SplashScreen from 'react-native-splash-screen';
import { API_ENDPOINTS } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Form } from './components';
import { LoginStyles } from './Login.style';
import { postLogin } from './Auth.action';

export default function LoginScreen({ navigation }) {
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleUserLogin = async () => {
    if (loginName && loginPassword) {

      let payload = { login_Name: loginName, login_Password: loginPassword };
      postLogin(
        payload, //API Payload
        (response) => {
          console.log("Login Success response", response);
          try {
            AsyncStorage.setItem('token', response.token)
            navigation.navigate('Parent', { token: response.token, });
            // navigation.navigate('Parent', { token: data.token, name: loginName });
          } catch (e) {
            // saving error (e)
          }
        },
        (error) => { // error handler invoked in middleware catch
          console.log("Login Error response", error);
        })

      /*
  try {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        login_Name: loginName,
        login_Password: loginPassword,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data.token);
      // try {
      //   mmkv.setString('token', data.token);
      //   navigation.navigate('Parent', { token: data.token, name: loginName });
      //   console.log(token.data);
      // } catch (e) {
      //   // saving error (e)
      //   console.log(e)
      // }
      try {
        await AsyncStorage.setItem('token', data.token)
        navigation.navigate('Parent', { token: data.token, });
        // navigation.navigate('Parent', { token: data.token, name: loginName });
        console.log(token.data)
      } catch (e) {
        // saving error (e)
      }
    } else if (response.status === 400) {
      const error = await response.json();
      Alert.alert('Error', error);
    } else {
      Alert.alert('Error', 'Please enter a valid username and password');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Something went wrong. Please try again');
  }*/
    }
  };


  if (showSplash) {
    return (
      <View style={LoginStyles.splash}>
        <Image source={require('../../assets/logo.jpg')} />
        <Image source={require('../../assets/jobVrittalogo.jpg')} />
      </View>
    );
  }

  return (
    <View>
      <ImageBackground source={require("../../assets/2.jpg")}>
        <SafeAreaView style={{ height: '100%' }}>
          <Image source={require('../../assets/ss.png')} style={{ width: '100%', height: '27%' }} />
          <ScrollView>
            <View style={LoginStyles.container}>
              <Text style={LoginStyles.title}>JobVritta</Text>
              <Form
                setLoginName={setLoginName}
                setLoginPassword={setLoginPassword}
                onSubmit={handleUserLogin}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
};


