import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Teste extends Component{
  render() {
    return (
      <View style={styles.container}>
          <Text> OLA </Text>
          <Text> Tudo Bem? </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'yellow',
    borderWidth: 5,
    borderColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
     
  

  },
})

export default Teste;



