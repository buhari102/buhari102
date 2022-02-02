/*// import React in our code
import React, {useEffect,useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text
} from 'react-native';
import { SearchBar,search } from 'react-native-elements';

const ListHeader = () => {
     
    
    

  //const { search } = this.state;

return (
  <SafeAreaView> 
<View style={styles.headerFooterStyle}>
  <Text style={styles.textStyle}>Commercial</Text>
  
</View>

<View>
<SearchBar 
  placeholder="Search"
  onChangeText={this.updateSearch}
  value={search}
  containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
  inputStyle={{backgroundColor: 'white'}}
  placeholderTextColor={'#g5g5g5'}
  searchIcon = {{type: 'Ionicons', color: '#86939e', name: 'Search' }}
  clearIcon={{type: 'Ionicons', color: '#86939e', name: 'Search'  }}
  inputContainerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 9}}
/>
</View>
 
</SafeAreaView>
);

};

const App = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: i,
        src: 'https://picsum.photos/1440/2842?random=' + (i + 1)
      };
    });
    setDataSource(items);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        ListHeaderComponent={ListHeader}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.src}}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
}); */

import React, {useState} from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  SafeAreaView
} from 'react-native';
import SearchBox from '../srcB/components/screenComponents/SearchBox';
import SearchContent from '../srcB/components/screenComponents/SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const CommercialScreen = () => {
  const [image, setImage] = useState(null);

  const getData = data => {
    setImage(data);
  };

  const windowWidth = Dimensions.get('window').width;
  const windoeHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity
          style={{
            margin: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="pluscircleo" style={{fontSize: 40, opacity: 0.5}} />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52,52,52,0.8)',
          }}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View
            style={{
              position: 'absolute',
              top: windoeHeight / 6,
              left: windowWidth / 18,
              backgroundColor: 'white',
              width: '90%',
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  the_anonymous_guy
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}} />
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}>
              <Ionic name="ios-heart-outline" style={{fontSize: 26}} />
              <Ionic name="ios-person-circle-outline" style={{fontSize: 26}} />
              <Feather name="navigation" style={{fontSize: 26}} />
            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default CommercialScreen;
