
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import VotingPage from '../voting/qus/VotingPage';
import AllocateScreen from '../allocate/Allocate.screen';
import Users from '../user/Users';



const CustomDrawer = ({ navigation }) => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const dropdownItems1 = [
    { label: 'PO ', action: () => navigation.navigate('PO') },
    { label: 'ECI', action: () => navigation.navigate('ECI') },
    { label: 'Margin', action: () => navigation.navigate('Margin') },
    { label: 'Submission', action: () => navigation.navigate('Submission') },
  ];
  const dropdownItems2 = [
    { label: 'PO', action: () => navigation.navigate('C_PO') },
    { label: 'ECI', action: () => navigation.navigate('C_ECI') },
    { label: 'Margin', action: () => navigation.navigate('C_Margin') },
    { label: 'Submission', action: () => navigation.navigate('C_Submission') },
  ];

  const toggleDropdown1 = () => { setShowDropdown1(!showDropdown1) };
  const toggleDropdown2 = () => { setShowDropdown2(!showDropdown2) };

  const Separator = () => <View style={{ borderBottomColor: '#262626', borderBottomWidth: StyleSheet.hairlineWidth, }} />

  return (
    <View style={{ flex: 2}}>
       <View style={{ flex: 0.58, backgroundColor: '#008080', paddingTop: 11, paddingHorizontal: 11, marginBottom: 11 }}>
        <Image source={{ uri: 'https://freepngimg.com/download/happy/144616-emoji-happy-free-transparent-image-hq.png', }}
          style={{ height: 101, width: 101, borderRadius: 4, }} />
        <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 5, }}> Admin</Text>
        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 1, marginBottom: 11 }}> Administrator Account</Text>
      </View>
      <TouchableOpacity onPress={toggleDropdown1} style={styles.dropdownHeader}>
        <Text style={styles.dropdownHeaderText}>Branch</Text>
        <View style={styles.dropdownIconContainer}>
          <Text style={styles.dropdownIcon}>{showDropdown1 ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>
      {showDropdown1 && (
        <View style={styles.dropdownContent}>
          {dropdownItems1.map(item => (
            <TouchableOpacity
              key={item.label}
              onPress={() => {
                toggleDropdown1();
                item.action();
              }}
              style={styles.dropdownItem}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Separator />
      <TouchableOpacity onPress={toggleDropdown2} style={styles.dropdownHeader}>
        <Text style={styles.dropdownHeaderText}>Company</Text>
        <View style={styles.dropdownIconContainer}>
          <Text style={styles.dropdownIcon}>{showDropdown2 ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>
      {showDropdown2 && (
        <View style={styles.dropdownContent}>
          {dropdownItems2.map(item => (
            <TouchableOpacity
              key={item.label}
              onPress={() => {
                toggleDropdown2();
                item.action();
              }}
              style={styles.dropdownItem}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <Separator /> 
      <TouchableOpacity onPress={() => navigation.navigate("VotingPage")}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 11 }}>Voting</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity onPress={() => navigation.navigate("Allocate")}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 11 }}> <Icon name="address-card" size={31} color="#005580" />  Allocate</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity onPress={() => navigation.navigate(Users)}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 11 }}> <Icon name="address-card" size={31} color="#005580" />   User</Text>
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity onPress={() =>
        Alert.alert(
          'Log out',
          'Do you want to logout?',
          [{ text: 'Cancel', onPress: () => { return null } },
          {
            text: 'Confirm', onPress: () => {
              navigation.navigate('Login')
              AsyncStorage.clear();
            }
          },],
          { cancelable: false })}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 21, marginLeft: 21, flexDirection: 'column-reverse' }}><Icon name="sign-out" size={31} color="#005580" />  Logout </Text>
      </TouchableOpacity>
      <Separator />
    </View>
  );
};

const styles = {
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 15,
  },
  dropdownHeaderText: {
    fontSize: 24,
    marginRight: 1,
    fontWeight: 'bold'
  },
  dropdownIconContainer: {
    // marginLeft: 'auto',
  },
  dropdownIcon: {
    fontSize: 24,
  },
  dropdownContent: {
    backgroundColor: '#f0f0f0',
    fontSize: 21,
  },
  dropdownItem: {
    paddingVertical: 1,
    paddingHorizontal: 15,
  },
};
export default CustomDrawer;