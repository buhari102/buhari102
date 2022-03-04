import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';

export const host2Atom = atom('');
const Host2 = () => {
  const [value, setValue] = React.useState('first');
  const [,setHost2Atom] = useAtom(host2Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost2Atom(value);
    if (value==="Living space") {
      return navigation.navigate('Host3')
    }
    else if (value==="Business complex") {
      return navigation.navigate('Host4')
    }
    else if (value==="Land") {
      return navigation.navigate('Host7')
    }
     
  } 

  const onBackPress = () => {
      return navigation.navigate('Host1')
  }

  return (
    <ScrollView>
        <View style={styles.root}>
        <Text style={{fontSize: 24, alignSelf: 'center'}}>Type of space or area</Text>

                       <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                              <RadioButton.Item label="Living space" value="Living space" />
                              <RadioButton.Item label="Business complex" value="Business complex" />
                              <RadioButton.Item label="Land" value="Land" />
                             
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
export default Host2;