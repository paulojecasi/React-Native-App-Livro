
/*
import React from 'react';
import {createDrawerNavigator} from 'react-navigation'; 

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import ParImpar2 from './componentes/ParImpar2'
import {Inverter, MegaSena} from './componentes/Multi'

export default createDrawerNavigator({
	MegaSena: {
		screen: () => <Megasena numeros={6} />,
		navigationOptions: {title: 'Mega Sena'}
	},
	Inverter: {
		screen: () => <Inverter texto= 'Volta Mundão' /> 
	}

}, {drawerWidth: 300})
*/ 
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Simples from './componentes/Simples'
import Home from './componentes/Home'
import ParImpar from './componentes/ParImpar'
import Inverter from './componentes/Inverter'
import MegaSena from './componentes/MegaSena'
import Contador from './componentes/Contador'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
	  	<Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="Simples" component={Simples} />
		<Stack.Screen name="ParImpar" component={ParImpar} />
		<Stack.Screen name="Inverter" component={Inverter} />
		<Stack.Screen name="MegaSena" component={MegaSena} />
		<Stack.Screen name="Contador" component={Contador} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



