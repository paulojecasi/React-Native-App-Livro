import React, {Component} from 'react'     /** bibliotecas do react**/
import {View, Text, StyleSheet} from 'react-native'    /** 2 componentes para fazer o HELLO WORD **/

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter from './componentes/Inverter'
import MegaSena  from './componentes/MegaSena'

export default class App extends Component {  /** componete usado dentro do index.js **/ 
  render(){          /** funcao **/ 
    return (         /** codigo jsx **/ 

        /** aqui temos um texto normal, e outro importado do Simples.js **/
      <View style = {styles.container}>
          <Text style = {styles.fonte20}> (-; Jecasi :-) </Text>
          <Simples texto = 'Flexivel!!!!!' />  
          <ParImpar numero  = {31}/>   
          <Inverter texto = 'React Nativo neh!'/>  
          <MegaSena numeros = {6} />          
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
