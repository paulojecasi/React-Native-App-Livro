import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Simples from './componentes/Simples'
import Home from './componentes/Home'
import ParImpar from './componentes/ParImpar'
import ParImpar2 from './componentes/ParImpar2'
import {Inverter, MegaSena} from './componentes/Multi'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
	  	<Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="Simples" component={Simples} />
		<Stack.Screen name="Par ou Impar 01" component={ParImpar} />
		<Stack.Screen name="Par ou Impar 02" component={ParImpar2} />
		<Stack.Screen name="Inverter" component={Inverter} />
		<Stack.Screen name="Mega Sena" component={MegaSena} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;