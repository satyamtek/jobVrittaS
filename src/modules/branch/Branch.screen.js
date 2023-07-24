import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '../../constants';
import BranchBody from './components/BranchBody';

export default function BranchScreen() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        setToken(storedToken);
        if (storedToken) {
          getDashboardData(storedToken);
          getDayWiseData(storedToken);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 900000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (token) {
      getDashboardData(token);
      getDayWiseData(token);
    }}, [token]);

  const getDashboardData = async (token) => {
    try {
      const response = await fetch(API_ENDPOINTS.BranchRequirement, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },});
      const result = await response.json();
      setData1(result);
    } catch (error) {console.error(error);}
  };

  const getDayWiseData = async (token) => {
    try {
      const response = await fetch(API_ENDPOINTS.BranchRequirementDayWise, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      const result = await response.json();
      setData2(result);
    } catch (error) {console.error(error)}
  };

  return (
      <View>
        <BranchBody data1={data1} data2={data2} />
      </View>
  );
}