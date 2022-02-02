import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton } from 'react-native-paper';


const Host12 = () => {
  const [value, setValue] = React.useState('first');

  return (
      <ScrollView>
          <Text style={{fontSize: 24, alignSelf: 'center'}}>What kind of place will you host?</Text>

         <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
            <RadioButton.Item label="First item" value="first" />
            <RadioButton.Item label="Second item" value="second" />
            <RadioButton.Item label="Third item" value="third" />
            <RadioButton.Item label="Fourth item" value="fourth" />
            <RadioButton.Item label="Fifth item" value="fifth" />
            <RadioButton.Item label="Sixth item" value="sixth" />
         </RadioButton.Group>
           <Button style={styles.buttona}  mode="contained" >
            Next
           </Button>
  
           <Button style={styles.buttonb}  mode="text" >
            Back
           </Button>
      </ScrollView>
   
  );
};

const styles = StyleSheet.create({
    buttona: {
      position: 'fixed',
      bottom: 0,
      right: 0,
    },
    buttonb: {
      position: 'fixed',
      bottom: 0,
      left: 0,
    },
  })

export default Host12;