import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert, useState, TextInput} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomInput from '../../src/components/CustomInput';


export const host5Atom = atom('');
const Host5 = () => {
  const [value, setValue] = React.useState('first');
  const [numguests, setNumguests] = React.useState('');
  const [numbeds, setNumbeds] = React.useState('');
  const [numbrooms, setNumbrooms] = React.useState('');
  const [numbath, setNumbath] = React.useState('');
  const [numpbath, setNumpbath] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [seccameras, setSeccameras] = React.useState('');
  const [secpersonel, setSecpersonel] = React.useState('');
  const [animals, setAnimals] = React.useState('');
  const [cleaning, setCleaning] = React.useState('');
  const [parking, setParking] = React.useState('');



  let [num, setNum]= React.useState(0);
  const [text, setText] = React.useState('');
  const [,setHost5Atom] = useAtom(host5Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost5Atom(value);
      return navigation.navigate('Host8')
  } 

  const onBackPress = () => {
      return navigation.navigate('Host3')
  }

  const incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };

  const decNum = () => {
    if(num>0)
    {
     setNum(num - 1);
    }
 }

 const handleChange = (e)=>{
  setNum(e.target.value);
 }

  return (
    <ScrollView>
        <View style={styles.root}>
        <Text style={{fontSize: 24, alignSelf: 'center'}}>Description of living area/space</Text>

                       
        <CustomInput
          placeholder="Number of guests"
          value={numguests}
          setValue={setNumguests}
        />
        <CustomInput
          placeholder="Number of beds"
          value={numbeds}
          setValue={setNumbeds}
          secureTextEntry
        />
         <CustomInput
          placeholder="Number of bedrooms"
          value={numbrooms}
          setValue={setNumbrooms}
        />
        <CustomInput
          placeholder="Number of bathrooms"
          value={numbath}
          setValue={setNumbath}
          
        />
         <CustomInput
          placeholder="Number of public bathrooms"
          value={numpbath}
          setValue={setNumpbath}
        />
        <CustomInput
          placeholder="Price of property"
          value={price}
          setValue={setPrice}
          
        />
         <CustomInput
          placeholder="Security cameras"
          value={seccameras}
          setValue={setSeccameras}
        />
        <CustomInput
          placeholder="Security personel"
          value={secpersonel}
          setValue={setSecpersonel}
          
        />
         <CustomInput
          placeholder="Animals"
          value={animals}
          setValue={setAnimals}
          
        />
         <CustomInput
          placeholder="Cleaning services"
          value={cleaning}
          setValue={setCleaning}
        />
        <CustomInput
          placeholder="Parking space"
          value={parking}
          setValue={setParking}
          
        />


               <Button style={styles.buttona}  mode="contained" onPress={onNextPress} >
                 Next
               </Button>

               <Button style={styles.buttonb}  mode="text" onPress={onBackPress} >
                 Back
               </Button>
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
      
    }
})

export default Host5;