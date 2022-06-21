import {StyleSheet} from 'react-native';

export const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  botao: {
    width: 230,
    height: 50,
    backgroundColor: '#dd7b22',
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 10,
    cursor: 'pointer',
  },
  btn_area: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101010',
  },
  botao_dois: {
    borderColor: '#dd7b22',
    backgroundColor: '#101010',

    marginTop: 10,
  },
});
