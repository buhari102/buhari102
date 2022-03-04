import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';

export const host3Atom = atom('');
const Host3 = () => {
  const [value, setValue] = React.useState('first');
  const [,setHost3Atom] = useAtom(host3Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost3Atom(value);
      return navigation.navigate('Host5')
  } 

  const onBackPress = () => {
      return navigation.navigate('Host2')
  }

  return (
    <ScrollView>
        <View style={styles.root}>
        <Text style={{fontSize: 24, alignSelf: 'center'}}>Type of living area/space</Text>

                       <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                              <RadioButton.Item label="Lodge" value="Lodge" />
                              <RadioButton.Item label="Hotel" value="Hotel" />
                              <RadioButton.Item label="Ghetto" value="Ghetto" />
                              <RadioButton.Item label="House" value="House" />
                             
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

export default Host3;