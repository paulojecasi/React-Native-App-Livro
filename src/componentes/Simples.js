import React from 'react';
import {View, Text} from 'react-native';
import Padrao from '../estilo/Padrao';

function Simples( { route } ) {
	return (
		<View>
			<Text style={Padrao.ex}> {route.params.texto} </Text>
		</View>
	);	
}
	
export default Simples;

