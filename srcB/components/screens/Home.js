import React from 'react';
import {View, Text, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <Text
          style={{
            fontFamily: 'Arial',
            fontSize: 25,
            fontWeight: '500',
          }}>
          Krib
        </Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
