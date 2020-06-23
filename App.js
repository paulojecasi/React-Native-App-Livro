import React, {Component} from 'react'     /** bibliotecas do react**/
import {View, Text, StyleSheet} from 'react-native'    /** 2 componentes para fazer o HELLO WORD **/ 

export default class App extends Component {  /** componete usado dentro do index.js **/ 
  render(){          /** funcao **/ 
    return (         /** codigo jsx **/ 
      <View style = {styles.container}>
          <Text style = {styles.fonte20}> App Jecasi </Text>
      </View>
    )
  }
}   

const styles = StyleSheet.create({          /** constantes **/
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  fonte20:{
    fontSize: 50,

  }



})
