/*import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../srcB/components/screens/Home';
import Search from '../../../srcB/components/screens/Search';
import Reels from '../../../srcB/components/screens/Reels';
import Activity from '../../../srcB/components/screens/Activity';
import Profile from '../../../srcB/components/screens/Profile';
import Ionic from 'react-native-vector-icons/Ionicons';
import Status from '../../../srcB/components/screenComponents/Status';
import FriendProfile from '../../../srcB/components/screenComponents/FriendProfile';
import EditProfile from '../../../srcB/components/screenComponents/EditProfile';

const HomeScreenB = () => {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const bottomTabScreen = () => {
    return (
      
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },

          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'Reels') {
              iconName = focused
                ? 'caret-forward-circle'
                : 'caret-forward-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            }

            return <Ionic name={iconName} size={size} color={colour} />;
            
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={bottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    
  );
};

export default HomeScreenB;*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import ResidentialScreen from '../../../srcC/residentialScreen';
import CommercialScreen from '../../../srcC/commercialScreen';
import ShortStayScreen from '../../../srcC/shortStayScreen';
import ThinkingScreen from '../../../srcC/thinkingScreen';
import Search from '../../../srcB/components/screens/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../../../srcB/components/screens/Profile';



const Tab = createBottomTabNavigator();

export default function App() {
    return (
      
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon : ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } 
          else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }
          else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          else if (route.name === 'Menu') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

           // You can return any component that you like here!
           return <Ionicons name={iconName} size={size} color={color} />;
          },
       
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >


        <Tab.Screen name="Home" component={ResidentialScreen} />
        <Tab.Screen name="Search" component={CommercialScreen} />
        <Tab.Screen name="Notifications" component={ShortStayScreen} />
        <Tab.Screen name="Menu" component={ThinkingScreen} />
      </Tab.Navigator>
      
    

    );
  }

