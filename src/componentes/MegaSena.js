import React from 'react'
import {View, Text} from 'react-native'
import Padrao from '../estilo/Padrao'

/*
export const Inverter = props => {
	const inv = props.texto.split('').reverse().join('')
	return <Text style={Padrao.ex2}> {inv} </Text>
}
*/


export default function MegaSena( { route } ) {
	

	const [min, max] = [1,60]
	const numeros = Array(route.params.numeros || 6).fill(0)

	for (let i=0; i < numeros.length; i++){
		let novo = 0
		while (numeros.includes(novo)) {
			novo = Math.floor(Math.random() * (max - min +1)) + min 
		}
		numeros[i] = novo
	}

	numeros.sort((a, b) => a-b)
	return <Text style ={Padrao.ex2}> {numeros.join(', ')} </Text> 


}




