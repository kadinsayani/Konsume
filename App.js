import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, Button, Alert} from 'react-native';

const RecordEntry = () => {
  const [input, setInput] = useState('');
  return (
    <SafeAreaView>
      <Text>
        Welcome to Konsume! Please enter an amount and a food item below.
      </Text>
      <TextInput
        placeholder="Enter food item here"
        onChangeText={input => setInput(input)}
        defaultValue={input}></TextInput>
      <Button title="Submit" onPress={() => Alert.alert(input)}></Button>
    </SafeAreaView>
  );
};

const apiRequest = input => {
  // todo - api request and parse
};

const App = () => {
  return <RecordEntry />;
};

export default App;
