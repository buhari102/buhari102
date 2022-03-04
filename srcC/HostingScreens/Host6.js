import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomInput from '../../src/components/CustomInput';

export const host6Atom = atom('');
const Host6 = () => {
  const [value, setValue] = React.useState('first');
  const [numrooms, setNumrooms] = React.useState('');
  const [numbath, setNumbath] = React.useState('');
  const [numpbath, setNumpbath] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [seccameras, setSeccameras] = React.useState('');
  const [secpersonel, setSecpersonel] = React.useState('');
  const [animals, setAnimals] = React.useState('');
  const [cleaning, setCleaning] = React.useState('');
  const [parking, setParking] = React.useState('');


  const [,setHost6Atom] = useAtom(host6Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost6Atom(value);
      return navigation.navigate('Host9')
  } 

  const onBackPress = () => {
      return navigation.navigate('Host4')
  }

  return (
    <ScrollView>
        <View style={styles.root}>
        <Text style={{fontSize: 24, alignSelf: 'center'}}>Description of business complex</Text>


          <CustomInput
          placeholder="Number of rooms"
          value={numrooms}
          setValue={setNumrooms}
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
export default Host6;