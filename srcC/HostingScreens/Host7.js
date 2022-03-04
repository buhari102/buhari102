import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomInput from '../../src/components/CustomInput';

export const host7Atom = atom('');
const Host7 = () => {
  const [value, setValue] = React.useState('first');
  const [sizeland, setSizeland] = React.useState('');
  const [priceland, setPriceland] = React.useState('');

  const [,setHost7Atom] = useAtom(host7Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost7Atom(value);
      return navigation.navigate('Host10')
  } 

  const onBackPress = () => {
      return navigation.navigate('Host2')
  }

  return (
    <ScrollView>
        <View style={styles.root}>
        <Text style={{fontSize: 24, alignSelf: 'center'}}>Description of land</Text>

                       
        <CustomInput
          placeholder="Size of land"
          value={sizeland}
          setValue={setSizeland}
        />
        
        <CustomInput
          placeholder="Number of bathrooms"
          value={priceland}
          setValue={setPriceland}
          
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
export default Host7;