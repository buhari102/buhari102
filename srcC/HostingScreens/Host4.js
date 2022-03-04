import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';

export const host4Atom = atom('');
const Host4 = () => {
  const [value, setValue] = React.useState('first');
  const [,setHost4Atom] = useAtom(host4Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost4Atom(value);
      return navigation.navigate('Host6')
  } 

  const onBackPress = () => {
      return navigation.navigate('Host2')
  }

  return (
    <ScrollView>
        <View style={styles.root}>
        <Text style={{fontSize: 24, alignSelf: 'center'}}>Type of business complex</Text>

                       <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                              <RadioButton.Item label="Frame" value="Frame" />
                              <RadioButton.Item label="Apartment/House space" value="Apartment/House space" />
                              <RadioButton.Item label="To-let space" value="To-let space" />
                              
                      </RadioButton.Group>


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
  buttona: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  buttonb: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  root: {
      alignItems: 'flex-start',
      padding: 20,
      flex: 1
      
    }
})
export default Host4;