import React from 'react';
import {View, Text} from 'react-native';
import Padrao from '../estilo/Padrao';

function Inverter( { route } ) {
    const inv = route.params.palavra.split('').reverse().join('')
	return (
        <View>
			<Text style={Padrao.ex}>
                 {inv}
            </Text>
		</View>     
	);	
}


export default Inverter; 
    