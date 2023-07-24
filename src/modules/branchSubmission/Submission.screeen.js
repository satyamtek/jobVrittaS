import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SubmissionBody from './components/SubmissionBody';


export default function SubmissionScreen() {
    // const { name } = route.params;
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('token');
            setToken(token);
        };
        getToken();
        const interval = setInterval(() => {
            getDashboardData(); // Fetch data every 10 seconds
            getDayWiseData();
        }, 900000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {if (token) {getDashboardData();getDayWiseData()}},[token])

    const getDashboardData = async () => {
        try {
            const response = await fetch('https://api.jobvritta.com/api/dashboard/submission', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setData1(result);
        } catch (error) {console.error(error)}
    };

    const getDayWiseData = async () => {
        try {
            const response = await fetch('https://api.jobvritta.com/api/dashboard/submissionDayWise', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            const result = await response.json();
            setData2(result);
        } catch (error) {console.error(error)}
    };

   return(
    <View>
        <SubmissionBody data1={data1} data2={data2}/>
    </View>
   )
}