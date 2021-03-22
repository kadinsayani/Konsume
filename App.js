import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
} from 'react-native';

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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <RecordEntry />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
