import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView,Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {atom,useAtom} from 'jotai';
import {emailAtom } from '../SignUpScreen/SignUpScreen';
import { idAtom,tokenAtom } from '../SignInScreen/SignInScreen';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const [email] = useAtom(emailAtom);
  const [id] = useAtom(idAtom);
  const [token] = useAtom(tokenAtom);
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onResendPress = () => {
    console.log('value ', email);
    
    fetch('http://localhost:8080/api/user/re-send-code', {
      method: 'POST',
      //mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      /*body: JSON.stringify({
        verificationCode: id,
        code: code
        

      })*/
      
    })
      .then(resp => {
        console.log('Printing out json');
        console.log(resp);
        return resp.json();
      })
      .then((responseJson) => {
        console.log('Printing out json');
        console.log(responseJson);
       Alert.alert('Code sent');
      })
      .catch((error) => {
        console.log(error);
        //setState({spinner: false});
        Alert.alert('Error', error.message);
        throw error;
      });
  };
 

  const submitData = () => {
    console.log("whats the state")
    
    console.log({id,code});
    fetch('http://localhost:8080/api/user/userverify', {
      method: 'POST',
      //mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        verificationCode: id,
        code: code
        

      })
    })
      .then(resp => {
        console.log('Printing out json');
        console.log(resp);
        return resp.json();
      })
      .then((responseJson) => {
        console.log('Printing out json');
        console.log(responseJson);
        navigation.navigate('CustomerHome');
      })
      .catch((error) => {
        console.log(error);
        //setState({spinner: false});
        Alert.alert('Error', error.message);
        throw error;
      });
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={submitData} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
