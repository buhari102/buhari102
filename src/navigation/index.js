import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import NewPasswordScreenB from '../screens/NewPasswordScreenB';
import HomeScreenB from '../screens/HomeScreenB';
import SignUpScreenB from '../screens/SignUpScreenB';
import Profile from '../../srcB/components/screens/Profile';
import ThinkingScreen from '../../srcC/thinkingScreen';
import CustomerInfoForm from '../../srcC/customerInfoForm';
import ManagerInfoForm from '../../srcC/managerInfoForm';
import EditProfile from '../../srcB/components/screenComponents/EditProfile'
import CompanyInfoForm from '../../srcC/companyInfoForm';
import HostingScreens from '../../srcC/HostingScreens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignUpB" component={SignUpScreenB} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="NewPasswordB" component={NewPasswordScreenB} />

        <Stack.Screen name="ManagerHome" component={HomeScreen} />
        <Stack.Screen name="CustomerHome" component={HomeScreenB} />
        <Stack.Screen name="ProfileA" component={Profile} />
        <Stack.Screen name="ProfileB" component={ThinkingScreen} />
        <Stack.Screen name="CustomerForm" component={CustomerInfoForm} />
        <Stack.Screen name="ManagerForm" component={ManagerInfoForm} />
        <Stack.Screen name="CompanyForm" component={CompanyInfoForm} />
        <Stack.Screen name="EditProfileA" component={EditProfile} />
        <Stack.Screen name="HostingScreens" component={HostingScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
