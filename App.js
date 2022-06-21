import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {S} from './Styles';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={S.container}>
      <Image source={require('./src/biscoito.png')} style={S.img} />
      <Text style={S.textoFrase}>
        "Uma frase bem legal do biscoito da sorte"
      </Text>
      <TouchableOpacity style={S.botao}>
        <View style={S.btn_area}>
          <Text style={S.btn_texto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[S.botao, S.botao_dois]}>
        <View style={S.btn_area}>
          <Text style={[S.btn_texto, {color: '#dd7b22'}]}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;
