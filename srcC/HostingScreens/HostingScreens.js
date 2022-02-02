import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Host1 from './Host1';
import Host2 from './Host2';
import Host3 from './Host3';
import Host4 from './Host4';
import Host5 from './Host5';
import Host6 from './Host6';
import Host7 from './Host7';
import Host8 from './Host8';
import Host9 from './Host9';
import Host10 from './Host10';
import Host11 from './Host11';

const Stack = createNativeStackNavigator();

const HostingScreens = () => {
  return (
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Host1" component={Host1} />
        <Stack.Screen name="Host2" component={Host2} />
        <Stack.Screen name="Host3" component={Host3} />
        <Stack.Screen name="Host4" component={Host4} />
        <Stack.Screen name="Host5" component={Host5} />
        <Stack.Screen name="Host6" component={Host6} />
        <Stack.Screen name="Host7" component={Host7} />
        <Stack.Screen name="Host8" component={Host8} />
        <Stack.Screen name="Host9" component={Host9} />
        <Stack.Screen name="Host10" component={Host10} />
        <Stack.Screen name="Host11" component={Host11} />
      </Stack.Navigator>
    
  );
};

export default HostingScreens;
