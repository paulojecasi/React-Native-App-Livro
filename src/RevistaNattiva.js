import React, {Component} from 'react'; 
import {View, Text, Image} from 'react-native';
import Estilo from './estilo/PadraoRevistaNattiva';
class RevistaNattiva extends Component{
  render() {
    const textoPrincipal = 'Este livro conta a historia um empreendimento de sucesso, a CACTOS DEV. Que inicio no dia 17/06/2020. Dois anos depois, se tornou uma das maiores empresas de tecnologia do pais, desenvolvendos APP, Jogos e Sites para as maiores empresas do Mercado.';
    return(
      <View style= {Estilo.estilo1}>

        <View style = {Estilo.view1}>
          <View style={Estilo.view1_1}>
          </View>

          <View style={Estilo.view1_2}>
          </View>

          <View style={Estilo.view1_3}>
          </View>

          <View style={Estilo.view1_4}>
          </View>
        </View>

        <View style = {Estilo.view2}>
          <Text style= {Estilo.view2_font}> Revista Cactos Dev </Text>
        </View>

        <View style = {Estilo.view3}>
          <View style = {Estilo.view3_1}>
            <Text style= {Estilo.view3_font}>
              {textoPrincipal.slice(0,250)}
            </Text>
          </View>
          <View style = {Estilo.view3_2}>
            <Image 
              style ={Estilo.view3_image}
              source={require('./imagens/cactos.png')} 
              
            />
          </View>
        </View>

        <View style = {Estilo.view4}>
        </View >

        <View style = {Estilo.view5}>
          <Text style = {Estilo.view5_font}> Copyright (c) Cactos Dev </Text>
        </View>



      </View>
    );
  }

}

export default RevistaNattiva;
