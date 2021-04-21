import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, Button, Alert} from 'react-native';

const RecordEntry = () => {
  const [input, setInput] = useState('');
  const [calories, setCalories] = useState('');
  return (
    <SafeAreaView>
      <Text>
        Welcome to Konsume! Please enter an amount and a food item below.
      </Text>
      <TextInput
        placeholder="Enter food to track here"
        onChangeText={input => setInput(input)}
        defaultValue={input}></TextInput>
      <Button
        title="Submit"
        onPress={() => calories => setCalories(apiRequest(input))}></Button>
      <Text>Calories: {calories}</Text>
    </SafeAreaView>
  );
};

const apiRequest = input => {
  // todo - api request and parse
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      const calories = this.responseText.split(',')[8];
      return calories;
    }
  });

  xhr.open(
    'GET',
    'https://calorieninjas.p.rapidapi.com/v1/nutrition?query=' + input,
  );
  xhr.setRequestHeader(
    'x-rapidapi-key',
    '123fd00c7bmshd1ed187683922d3p1ee616jsnb34534610f6a',
  );
  xhr.setRequestHeader('x-rapidapi-host', 'calorieninjas.p.rapidapi.com');

  xhr.send(data);
};

const App = () => {
  return <RecordEntry />;
};

export default App;
