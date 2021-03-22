import React from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';

const RecordEntry = () => {
  return (
    <SafeAreaView>
      <Text>
        Welcome to Konsume! Please enter an amount and a food item below.
      </Text>
      <TextInput></TextInput>
    </SafeAreaView>
  );
};

const App = () => {
  return <RecordEntry />;
};

export default App;
