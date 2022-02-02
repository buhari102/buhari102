/*import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {atom,useAtom} from 'jotai';
import { refreshAtom,tokenAtom } from '../SignInScreen/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';


const index = () => {
  const [refresh] = useAtom(refreshAtom);
  const [token] = useAtom(tokenAtom);

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
        
      })
      .catch((error) => {
        console.log(error);
        //setState({spinner: false});
        Alert.alert('Error', error.message);
        throw error;
      });}

  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, for customer</Text>
      <CustomButton text="Log Out" onPress={onSubmitPressed} />
    </View>
  );
};

export default index;*/

export {default} from './HomeScreenB';
