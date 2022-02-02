import React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import CustomButton from '../src/components/CustomButton';
import {atom,useAtom} from 'jotai';
import { refreshAtom,tokenAtom } from '../src/screens/SignInScreen/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { roleAtom } from '../src/screens/SignInScreen/SignInScreen';


const ThinkingScreen = () => {
  const [refresh] = useAtom(refreshAtom);
  const [token] = useAtom(tokenAtom);
  const [role] = useAtom(roleAtom);

  const navigation = useNavigation();
 
  console.log(token)
  const onSubmitPressed = () => {
    fetch('http://localhost:8080/api/auth/sign-out', {
      method: 'POST',
      //mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        refreshToken: refresh
        
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
        navigation.navigate('SignIn');
        Alert.alert('You have logged out succesfully')
        
      })
      .catch((error) => {
        console.log(error);
        //setState({spinner: false});
        Alert.alert('Error', error.message);
        throw error;
      });}

      const onProfilePress = () => {
        navigation.navigate('ProfileA');
      };

      const onDiffText = () => {
        if(role==='property_manager') {
          return "Hosting"
        }
        else if(role==='customer') {
          return "Payments"
        } 
      };

      const onDiffPress = () => {
        if(role==='property_manager') {
          return navigation.navigate('HostingScreens')
        }
        else if(role==='customer') {
          return 
        } 
      }

  return (
    <ScrollView>
      <View style={styles.root} >
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, for {role}</Text>

      <CustomButton text="Profile" onPress={onProfilePress} />
      
      <CustomButton text="Settings"  />
      
      <CustomButton text={onDiffText(role)} onPress={onDiffPress} />
      
      <CustomButton text="Other" />
      
      <CustomButton text="Log Out" onPress={onSubmitPressed} />
      </View>

    </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    //backgroundColor: 'rgb(250, 233, 234)'
  }
})

export default ThinkingScreen;