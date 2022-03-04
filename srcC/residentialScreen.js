// import React in our code
import React, {useEffect,useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  Button
} from 'react-native';
import { SearchBar,search } from 'react-native-elements';

function Site () {

 
}


const ListHeader = () => {
     
    
    

  //const { search } = this.state;

return (
  <SafeAreaView>
<View style={styles.headerFooterStyle}>
  <Text style={styles.textStyle}></Text>
  
</View>




<View style={styles.fixToText}>
        <Button
          title="Book" onPress={Site}
        />
        <Button
          title="Rent"  onPress={Site}
        />
        <Button
          title="Buy"   onPress={Site}
        />
      </View>
 
</SafeAreaView>
);

};

const ResidentialScreen = () => {
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
export default ResidentialScreen;

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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: 'red'
  },
});