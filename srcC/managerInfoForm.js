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
  Alert,
  Button
  
} from 'react-native';
import CustomInput from '../src/components/CustomInput';
import CustomButton from '../src/components/CustomButton';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { tokenAtom } from '../src/screens/SignInScreen/SignInScreen';
import { useForm } from "react-hook-form";
import {atom,useAtom} from 'jotai';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import urls from '../API/urls';

const ManagerInfoForm = () => {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [surname, setSurname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const { register, handleSubmit } = useForm();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [idcardtype, setIdcardtype] = useState('');
  const [idcardnumber, setIdcardnumber] = useState('');
  const [idcard, setIdcard] = useState('');
  const [token] = useAtom(tokenAtom);
  

  //const window = useWindowDimensions();
  const windowW= Dimensions.get('window').width;
  const windowH = Dimensions.get('window').height;

  const navigation = useNavigation();

  const onSubmitPress = () => {
    fetch(urls.managerForm, {
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
        idCardType: idcardtype,
        idCardNumber: idcardnumber,
        address: address,
        idCard: idcard,
        pmType: 'individual',


        

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

    //navigation.navigate('Home');
  };

  const onProfilePress = () => {
    
    
    return  navigation.navigate('ProfileA');
   
 }
 const onCompanyPress = () => {
    
    
  return  navigation.navigate('CompanyForm');
 
}

 

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <View style={styles.root}>
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
          placeholder="Date of birth(YY/MM/DD)"
          value={dob}
          setValue={setDob}
          
        />


        <CustomInput
          placeholder="Gender(Male/Female)"
          value={gender}
          setValue={setGender}
        />

      
        
        <CustomInput
          placeholder="Email address"
          value={email}
          setValue={setEmail}
          
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
        <CustomInput
          placeholder="ID card type"
          value={idcardtype}
          setValue={setIdcardtype}
        />
        
        <CustomInput
          placeholder="ID card number"
          value={idcardnumber}
          setValue={setIdcardnumber}
          
        />
        
        <CustomInput
          placeholder="Upload ID card"
          value={idcard}
          setValue={setIdcard}
        />
        
        <CustomButton text="Submit" onPress={onSubmitPress} />

        <CustomButton
          text="Filling as a company? Press here"
          onPress={onCompanyPress}
          type="TERTIARY"
        />
         <CustomButton
          text="Return to profile"
          onPress={onProfilePress}
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
    height: hp('60%'), // 70% of height device screen
    width: wp('100%')
    
  },
  
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  header: {
    fontSize: 20,
   
    margin: 0,
    textAlign: "center",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: 'red'
  },
  date: {
    backgroundColor: 'white',
    width: 345,
    height: 55,
    //width: '100%',
    //height:'8%',
    

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  }
});

export default ManagerInfoForm;

