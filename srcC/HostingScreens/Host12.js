import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';
import { host1Atom } from './Host1';
import CustomInput from '../../src/components/CustomInput';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const host12Atom = atom('');
const Host12 = () => {
  const [value, setValue] = React.useState('first');
  const [price, setPrice] = React.useState('');
  const [type] = useAtom(host1Atom);
  const [,setHost12Atom] = useAtom(host12Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost12Atom(value);
      return navigation.navigate('Host14')
  } 

  const onBackPress = () => {
      return navigation.navigate('Host9')
  }

  return (
    <ScrollView>
        <View style={styles.root}>
        <Text style={{fontSize: 24, alignSelf: 'center'}}>Price of business complex</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Price for {type}</Text>

        <CustomInput
          placeholder="Price of area/space"
          value={price}
          setValue={setPrice}
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
export default Host12;