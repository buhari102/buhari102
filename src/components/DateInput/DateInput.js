import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

//const [value, onChange] = useState(new Date());

const DateInput = ({value, setValue, placeholder,onSelect}) => {
  return (
    <View style={styles.container}>
      <DatePicker
        selected={value}
        onChange={setValue}
        onSelect={onSelect}
        placeholder={placeholder}

        style={styles.input}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height:'8%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    
  },
});

export default DateInput;
