import React from 'react';
import {Component} from 'react';
import {View, Text} from 'react-native';
import { HeaderBackground } from 'react-navigation-stack';
import Padrao from './estilo/PadraoArcoIris';

class ArcoIris extends Component {
  constructor(props) {
    super(props);
    this.state ={
      cor_jecasi : [
        Padrao.estilo_cor1,
        Padrao.estilo_cor2,
        Padrao.estilo_cor3,
        Padrao.estilo_cor4,
        Padrao.estilo_cor5,

      ], 
    };
  }

  componentDidMount(){
    setInterval(() => {

      const tirarUltimaCor= this.state.cor_jecasi.slice(-1);
      const listaSemAUltimaCor = this.state.cor_jecasi.slice(0, -1); 



      this.setState({cor_jecasi: tirarUltimaCor.concat(listaSemAUltimaCor) })

    },300)
  }

  render(){
    /*
    const cor_jecasi = [
      Padrao.estilo_cor1,
      Padrao.estilo_cor2,
      Padrao.estilo_cor3,
      Padrao.estilo_cor4,
      Padrao.estilo_cor5,

    ];
    const views_jecasi = cor_jecasi.map(varias_cores => (
    */
    const views_jecasi = this.state.cor_jecasi.map(varias_cores => (

        <View key={varias_cores} style={varias_cores}>  
        </View>

      ));
    return(   
      <View style = {Padrao.estilo_flex1}>
        {views_jecasi}
      </View>
      
    );
  }
}    
export default ArcoIris;
