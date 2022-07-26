import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';

export const host1Atom = atom('');

const Host1 = () => {
  const [value, setValue] = React.useState('first');
  const [,setHost1Atom] = useAtom(host1Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost1Atom(value);

    if(value==="Shortstays") {
      return navigation.navigate('Host3');
    }
    else {
      return navigation.navigate('Host2');
    }
     
  } 

  const onBackPress = () => {
      return navigation.navigate('ManagerHome')
  }


  return (
      <ScrollView>
          <View style={styles.root}>
          <Text style={{fontSize: 24, alignSelf: 'center'}}>Purpose of your place</Text>

                         <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                                <RadioButton.Item label="Shortstays" value="Shortstays" />
                                <RadioButton.Item label="Rent" value="Rent" />
                                <RadioButton.Item label="Selling" value="Selling" />
                                
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

export default Host1;