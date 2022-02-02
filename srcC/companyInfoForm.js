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
  
} from 'react-native';
import CustomInput from '../src/components/CustomInput';
import CustomButton from '../src/components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';
import { tokenAtom } from '../src/screens/SignInScreen/SignInScreen';

import { useForm } from "react-hook-form";

const CompanyInfoForm = () => {
  const [companyname, setCompanyname] = useState('');
  const [businessRegistrationNum, setBusinessregistrationnum] = useState('');
  const [tinnumber, setTinnumber] = useState('');
  const [certificateofincoporation, setCertificateofincoporation] = useState('');
  const [businesslicense, setBusinesslicense] = useState('');
  const [address, setAddress] = useState('');
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
        companyName: companyname,
        businessRegistrationNum: businessRegistrationNum,
        tinNumber: tinnumber,
        CertificateOfIncoporation: certificateofincoporation,
        businesslicense: businesslicense,
        address: address,
        phoneNumber: phonenumber,
        pmType: 'company'
       
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
        Alert.alert('Your information is saved succesfully');
        navigation.navigate('ProfileA');
        
      })
      .catch((error) => {
        console.log(error);
        //setState({spinner: false});
        Alert.alert('Error', error.message);
        throw error;
      });

    //navigation.navigate('Home');
  };

  const onManagerPress = () => {
    
    
    return  navigation.navigate('ManagerForm');
   
 }

 

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.header}>Form</Text>
      
        <CustomInput
          placeholder="Company name"
          value={companyname}
          setValue={setCompanyname}
        />
        <CustomInput
          placeholder="Business Registration Number"
          value={businessRegistrationNum}
          setValue={setBusinessregistrationnum}
          
        />
        <CustomInput
          placeholder="Tin number"
          value={tinnumber}
          setValue={setTinnumber}
        />
        
        <CustomInput
          placeholder="Certificate of incoporation"
          value={certificateofincoporation}
          setValue={setCertificateofincoporation}
          
        />
       
        <CustomInput
          placeholder="Business License"
          value={businesslicense}
          setValue={setBusinesslicense}
        />
        <CustomInput
          placeholder="Address"
          value={address}
          setValue={setAddress}
          
        />
        
        <CustomInput
          placeholder="Phone number"
          value={phonenumber}
          setValue={setPhonenumber}
          
        />
        

        <CustomButton text="Submit" onPress={onSubmitPress} />

        <CustomButton
          text="Return to form"
          onPress={onManagerPress}
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
    flex:1
    
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  header: {
    fontSize: 36,
   
    margin: 12,
    textAlign: "center",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: 'red'
  },
});

export default CompanyInfoForm;

