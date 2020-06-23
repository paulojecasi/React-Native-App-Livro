import React from 'react'
import {Text, View} from 'react-native'
import Padrao from '../estilo/Padrao'

function parOuImpar(num2){
	if (num2 % 2 ==0){
		return <Text style={Padrao.ex} >PouI2 Numero {num2} é PAR </Text>
	} else {
		return <Text style={Padrao.ex2}>PouI2 Numero {num2} é IMPAR </Text>
	}
}

export default props =>

	<View>
		{parOuImpar(props.numero2)}
	</View> 