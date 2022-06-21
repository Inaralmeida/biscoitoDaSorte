import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {S} from './Styles';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [frase, setFrase] = useState('');
  const [img, setImg] = useState(require('./src/biscoito.png'));

  const frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite  em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
  ];
  function quebraBiscoito() {
    const random = Math.floor(Math.random() * frases.length);
    setFrase(`"${frases[random]}"`);
    setImg(require('./src/biscoitoAberto.png'));
  }
  function reiniciarBiscoito() {
    setFrase('');
    setImg(require('./src/biscoito.png'));
  }
  return (
    <View style={S.container}>
      <Image source={img} style={S.img} />

      <Text style={S.textoFrase}>{frase}</Text>

      <TouchableOpacity style={S.botao} onPress={quebraBiscoito}>
        <View style={S.btn_area}>
          <Text style={S.btn_texto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[S.botao, S.botao_dois]}
        onPress={reiniciarBiscoito}>
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
