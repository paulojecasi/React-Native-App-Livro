import React from 'react';
import {View, Text} from 'react-native';
import Padrao from '../estilo/Padrao';

export default function ParImpar( {route} ) {
	if (route.params.numero % 2 ==0){
		return <Text style={Padrao.ex} >PouI2 Numero {route.params.numero} é PAR </Text>
	} else {
		return <Text style={Padrao.ex2}>PouI2 Numero {route.params.numero} é IMPAR </Text>
	}	
}
	

