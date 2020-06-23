import React from 'react';
import {View, Text} from 'react-native';
import Padrao from '../estilo/Padrao';

export default function Contador( { route } ) {
    
    var nume= 0;

    while (nume < route.params.numero){
        nume++;
        
            <View>
                <Text style={Padrao.ex}> {nume} </Text>
            </View>
  
    }

    return (
        <View>
            <Text style={Padrao.ex}> {nume} </Text>
        </View>
    );
        
    
}