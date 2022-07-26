import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';
import { host1Atom } from './Host1';
import { host2Atom } from './Host2';
import { host3Atom } from './Host3';
import { host4Atom } from './Host4';
import { host5Atom } from './Host5';
import { host6Atom } from './Host6';
import { host7Atom } from './Host7';
import { host8Atom } from './Host8';
import { host9Atom } from './Host9';
import { host10Atom } from './Host10';
import { host11Atom } from './Host11';
import { host12Atom } from './Host12';
import { host13Atom } from './Host13';


const Host14 = () => {
  const [value, setValue] = React.useState('first');
  const [host1] = useAtom(host1Atom);
  const [host2] = useAtom(host2Atom);
  const [host3] = useAtom(host3Atom);
  const [host4] = useAtom(host4Atom);
  const [host5] = useAtom(host5Atom);
  const [host6] = useAtom(host6Atom);
  const [host7] = useAtom(host7Atom);
  const [host8] = useAtom(host8Atom);
  const [host9] = useAtom(host9Atom);
  const [host10] = useAtom(host10Atom);
  const [host11] = useAtom(host11Atom);
  const [host12] = useAtom(host12Atom);
  const [host13] = useAtom(host13Atom);
  
  const navigation = useNavigation();

  const onFinishPress = () => {
   
      return navigation.navigate('ManagerHome')
  } 

  const onBackPress = () => {
    if (host2==="Living space") {
      return navigation.navigate('Host11');
    }
    else if (host2==="Business complex") {
      return navigation.navigate('Host12');
    }
    else if (host2==="Land") {
      return navigation.navigate('Host13');
    }
     
  }

  return (
      <ScrollView>
         <View style={styles.root}>
          <Text style={{fontSize: 24, alignSelf: 'center'}}>Property Information</Text>

        
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 1 info is {host1}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 2 info is {host2}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 3 info is {host3}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 4 info is {host4}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 5 info is {host5}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 6 info is {host6}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 7 info is {host7}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 8 info is {host8}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 9 info is {host9}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 10 info is {host10}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 11 info is {host11}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 10 info is {host12}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Host 11 info is {host13}</Text>
        
           <Button style={styles.buttona}  mode="contained" onPress={onFinishPress} >
            Finish
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

export default Host14;