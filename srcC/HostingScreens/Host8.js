import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert, SafeAreaView, FlatList, Image} from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {atom,useAtom} from 'jotai';
import ImagePicker from 'react-native-image-crop-picker';

//got a code that is troubling me at posting photos
//I have already created a code through the updating of states
//And it is saved in the state 
//Then I should pack the state with the images
//It changes when I keep the gallery inside the state

export const host8Atom = atom('');
const Host8 = () => {
  const [value, setValue] = React.useState('first');
  //const [gallery, setGallery] = React.useState();
  const [dataSource, setDataSource] = React.useState([]);
  const [,setHost8Atom] = useAtom(host8Atom);
  const navigation = useNavigation();

  const onNextPress = () => {
    setHost8Atom(value);
      return navigation.navigate('Host11')
  } 

  const onBackPress = () => {
      return navigation.navigate('Host5')
  }

  const imagePickerMain = () => {
    
      ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
      mediaType: "photo"

    }).then(images => {
      console.log(images);
      const gallery = images;
      setDataSource(gallery);
    });
  
   
  
  }
 /* React.useEffect(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: i,
        src: `${gallery}` + (i + 1)
      };
    });
    setDataSource(items);
  }, []);*/

 

  return (
    /*<ScrollView>
        <View style={styles.root}>
        <Text style={{fontSize: 24, alignSelf: 'center'}}>Pictures of living area/space</Text>

                       <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                              <RadioButton.Item label="First item" value="first" />
                              <RadioButton.Item label="Second item" value="second" />
                              <RadioButton.Item label="Third item" value="third" />
                              <RadioButton.Item label="Fourth item" value="fourth" />
                              <RadioButton.Item label="Fifth item" value="fifth" />
                        <RadioButton.Item label="Sixth item" value="sixth" />
                      </RadioButton.Group>


                     
        </View>
        
    </ScrollView>*/

    <SafeAreaView style={styles.root}>
       <Button icon="camera" mode="contained" onPress={imagePickerMain}>
    Choose photo
      </Button>
      <Image style={{ width: 350, height: 300 }} source={dataSource} />
      <Button style={styles.buttona}  mode="contained" onPress={onNextPress} >
      Next
    </Button>

    <Button style={styles.buttonb}  mode="text" onPress={onBackPress} >
      Back
    </Button>

    </SafeAreaView>
 
);
};

const styles = StyleSheet.create({
  buttona: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  buttonb: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  root: {
      alignItems: 'center',
      padding: 20,
      flex: 1
      
    }
})

export default Host8;