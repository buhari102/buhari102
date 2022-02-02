import React, {useState} from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  Alert
} from 'react-native';
import CustomInput from '../src/components/CustomInput';
import CustomButton from '../src/components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';
import { tokenAtom } from '../src/screens/SignInScreen/SignInScreen';

const CustomerInfoForm = () => {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [surname, setSurname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [token] = useAtom(tokenAtom);

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSubmitPress = () => {
    fetch('http://localhost:8080/api/profile/', {
      method: 'POST',
      //mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        firstName: firstname,
        middleName: middlename,
        surName: surname,
        dob: dob,
        gender: gender,
        emailAddress: email,
        phoneNumber: phonenumber,
       


        

      })
    })
      .then(resp => {
        console.log('Printing out json');
        console.log(resp);
       
        
      })
      .then((responseJson) => {
        console.log('Printing out json');
        console.log(responseJson);
        Alert.alert('Your information is saved succesfully');
        navigation.navigate('ProfileA');
        
      })
      .catch((error) => {
        console.log(error);
        //setState({spinner: false});
        Alert.alert('Error', error.message);
        throw error;
      });
  };

  const onProfilePress = () => {
    
    
    return  navigation.navigate('ProfileA');
   
 }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.root}>
      <Text style={styles.header}>Form</Text>
      
        <CustomInput
          placeholder="Firstname"
          value={firstname}
          setValue={setFirstname}
        />
        <CustomInput
          placeholder="Middlename"
          value={middlename}
          setValue={setMiddlename}
          
        />
        <CustomInput
          placeholder="Surname"
          value={surname}
          setValue={setSurname}
        />
        
        <CustomInput
          placeholder="Date of birth(DD/MM/YY)"
          value={dob}
          setValue={setDob}
          
        />
        <CustomInput
          placeholder="Gender(Male/Female)"
          value={gender}
          setValue={setGender}
        />
         <CustomInput
          placeholder="Phone number"
          value={phonenumber}
          setValue={setPhonenumber}
          
        />
        <CustomInput
          placeholder="Email address"
          value={email}
          setValue={setEmail}
          
        />

        <CustomButton text="Submit" onPress={onSubmitPress} />

        <CustomButton
          text="Return to profile"
          onPress={onProfilePress}
          type="TERTIARY"
        />
        

        
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  header: {
    fontSize: 36,
    padding: 24,
    margin: 12,
    textAlign: "center",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: 'red'
  },
});

export default CustomerInfoForm;

