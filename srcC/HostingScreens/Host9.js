import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';


export const host9Atom = atom('');
const Host9 = () => {
  const [value, setValue] = React.useState('first');
  const [,setHost9Atom] = useAtom(host9Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost9Atom(value);
      return navigation.navigate('Host12')
  } 

  const onBackPress = () => {
      return navigation.navigate('Host6')
  }

  return (
    <ScrollView>
        <View style={styles.root}>
        <Text style={{fontSize: 24, alignSelf: 'center'}}>Pictures of business complex</Text>

                       <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                              <RadioButton.Item label="First item" value="first" />
                              <RadioButton.Item label="Second item" value="second" />
                              <RadioButton.Item label="Third item" value="third" />
                              <RadioButton.Item label="Fourth item" value="fourth" />
                              <RadioButton.Item label="Fifth item" value="fifth" />
                        <RadioButton.Item label="Sixth item" value="sixth" />
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
export default Host9;