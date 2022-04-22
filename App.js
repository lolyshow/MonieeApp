import React from 'react';
import {Text,View,StyleSheet} from 'react-native';


const App = () => {
  
  return (
    <View style = {styles.container}>
      <View>
        <Text>Hello World</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
  
});

export default App;
