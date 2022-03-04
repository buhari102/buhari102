import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {atom,useAtom} from 'jotai';
import urls from '../../../API/urls';

export const emailAtom = atom('');

const SignUpScreenB = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [,setEmailAtom] = useAtom(emailAtom);
  const navigation = useNavigation();

  const ConfirmPassword = () => {
    return password === passwordRepeat;
  }


  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  

  const onSignInPress = () => {
    navigation.navigate('SignIn');

  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };


  const submitData = () => {
    console.log("whats the state")
    

    if (!ConfirmPassword()) {

      Alert.alert('Password not correct');
      return 
    }

    fetch(urls.signupPM, {
      method: 'POST',
      //mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: email,
        password: password,
        confirmPassword: passwordRepeat

      })
    })
      .then(resp => {
        console.log('Printing out json');
        console.log(resp);
        setEmailAtom(email);
        return resp.json();
      })
      .then((responseJson) => {
        console.log('Printing out json');
        console.log(responseJson);
        Alert.alert('You have succesfully registered, please Sign-in');
        navigation.navigate('SignIn');
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
        <Text style={styles.title}>Create an account</Text>

       
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={submitData} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        

        <CustomButton
          text="Have an account? Sign in"
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

export default SignUpScreenB;
