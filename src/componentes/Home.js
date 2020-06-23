import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
    return (
        <View> 
            <Text> HOMER </Text>
            <Button
                title = "Texto Simples"
                onPress ={()=> navigation.navigate('Simples',
                               {texto: 'aqui é somente um Texto bem simples!'})  }
            />
            
            <Button
                title = "Par ou Impar"
                onPress ={()=> navigation.navigate('ParImpar',{numero: 22 })  }
            />

            <Button
                title = "Inverter palavras"
                onPress ={()=> navigation.navigate('Inverter',{palavra: 'AICNALUBMA TESTE'})  }
            />
            <Button
                title = "Numeros da Mega Sena(Surprezinha)"
                onPress ={()=> navigation.navigate('MegaSena',{numeros: 10})  }
            />

            <Button
                title = "Contador de Numeros"
                onPress ={()=> navigation.navigate('Contador',{numero:20})}
            /> 
        </View>
    
    ); 
}