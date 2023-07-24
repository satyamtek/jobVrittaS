
import React from 'react';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import BranchScreen from '../modules/branch/Branch.screen';
import CompanyScreen from '../modules/company/Company.screen';

const Bottom = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Bottom.Navigator screenOptions={{ tabBarHideOnKeyboard: true, }}>
            {/* <Bottom.Screen name="Branchs" component={VotingPage} options={{ headerShown: false, tabBarLabel: 'Branch', tabBarIcon: () => (<Icon name='archive' size={31} color="#005580" />) }} /> */}
            <Bottom.Screen name="Branch" component={BranchScreen} options={{ headerShown: false, tabBarLabel: 'Branch', tabBarIcon: () => (<Icon name='archive' size={31} color="#005580" />) }} />
            <Bottom.Screen name="Company" component={CompanyScreen} options={{ headerShown: false, tabBarLabel: 'Company', tabBarIcon: () => (<Icon name='spotify' size={31} color="#215580" />) }} />
        </Bottom.Navigator>
    )
}

export default TabNavigation;



