import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';
import urls from '../../../API/urls';


export const idAtom = atom('');
export const tokenAtom = atom('');
export const refreshAtom = atom('');
export const roleAtom = atom('');
export const dpAtom = atom('');


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [,setIdAtom] = useAtom(idAtom);
  const [,setTokenAtom] = useAtom(tokenAtom);
  const [,setRefreshAtom] = useAtom(refreshAtom);
  const [,setRoleAtom] = useAtom(roleAtom);
  const [,setdpAtom] = useAtom(dpAtom);
  const [token] = useAtom(tokenAtom);

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  
  const onSignInPressed = () => {
    // validate user

    fetch(urls.login, {
      method: 'POST',
      //mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
        

      })
    })
      .then(resp => {
        console.log('Printing out json');
        console.log(resp);
        
        return resp.json();
      })
      .then((responseJson) => {
        console.log('Printing out json');
        console.log(responseJson);
        const refresh = responseJson.refreshToken;
        const isVerified = responseJson.user.isVerified;
        const role = responseJson.user.role;
        const id = responseJson.user.verificationCode;
        const token = responseJson.accessToken;
        console.log(role)
        if(!isVerified) {
          setTokenAtom(token);
          setIdAtom(id);
          navigation.navigate('ConfirmEmail');
          return 
        }
        if(role==='property_manager') {
          setTokenAtom(token);
          setRefreshAtom(refresh);
          setRoleAtom(role);
          return navigation.navigate('ManagerHome');
        }
        else if(role==='customer') {
          setTokenAtom(token);
          setRefreshAtom(refresh);
          setRoleAtom(role);
          return navigation.navigate('CustomerHome');
        }
        
      })
      .catch((error) => {
        console.log(error);
        //setState({spinner: false});
        Alert.alert('Error', error.message);
        throw error;
      });

    //navigation.navigate('Home');
  };

  const profilePic = () => {
      
    fetch('http://localhost:8080/api/profile/photo', {
      method: 'GET',
      //mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'image/png',
        'Authorization': 'Bearer ' + token

      },
     
    })
      .then(resp => {
        console.log('Printing out json');
        console.log(resp);
        
        return resp.json();
      })
      .then((responseJson) => {
        console.log('dp');
        console.log(responseJson);
        const dp = responseJson;
        setdpAtom(dp);
        
      })
      .catch((error) => {
        console.log(error);
        //setState({spinner: false});
        Alert.alert('Error', error.message);
        throw error;
      });

    }    


  const onCombined = () => {
    profilePic();
    onSignInPressed();
  } 

  
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
      <Text style={styles.header}>Login</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

       <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    //backgroundColor: 'rgb(250, 233, 234)'
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  header: {
    fontSize: 36,
    padding: 24,
    margin: 12,
    textAlign: "center",
  }
});

export default SignInScreen;
