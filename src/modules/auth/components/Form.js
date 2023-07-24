import React, {useRef } from 'react';
import { View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginStyles } from '../Login.style';

export default function Form({ setLoginName, setLoginPassword, onSubmit }) {
  const passwordInputRef = useRef(null);

  const handleLoginNameChange = (text) => {
    setLoginName(text);
  };
  const handleLoginPasswordChange = (text) => {
    setLoginPassword(text);
  };
  const handleLogin = () => {
    onSubmit();
  };

  return (
    <SafeAreaView style={LoginStyles.login}>
      <TextInput
        style={LoginStyles.input}
        onChangeText={handleLoginNameChange}
        // onChangeText={text => setLoginName(text)}
        placeholder="Email or Username"
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => {
          passwordInputRef.current.focus();
        }}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={LoginStyles.input}
        onChangeText={handleLoginPasswordChange}
        placeholder="Password"
        secureTextEntry={true}
        // autoCapitalize="none"
        returnKeyType="go"
        blurOnSubmit={false}
        ref={passwordInputRef}
        // onSubmitEditing={handleLogin}
        underlineColorAndroid="transparent"
      />
      <View style={LoginStyles.LoginBtn}>
        <Button onPress={handleLogin} title="Log In" titleStyle={{ color: 'black' }} textDecorationColor={'black'} color={'#f95353'} />
      </View>
    </SafeAreaView>
  );
}