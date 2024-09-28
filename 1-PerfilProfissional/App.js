import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class MeuPerfilProfissional extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.profilePic}
            source={{ uri: 'https://i.pinimg.com/736x/e6/fe/b0/e6feb086bf4c1eb92bca16038fc416a4.jpg' }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Pedro Augusto</Text>
          <Text style={styles.info}>Dados pessoais:</Text>
          <Text style={styles.info}>pedro.targhetta@fatec.sp.gov.br</Text>
          <Text style={styles.info}></Text>
          <Text style={styles.info}></Text>
          <Text style={styles.info}>Formação:</Text>
          <Text style={styles.info}>Cursando Sistemas para Internet</Text>
          <Text style={styles.info}></Text>
          <Text style={styles.info}></Text>
          <Text style={styles.info}>Experiência:</Text>
          <Text style={styles.info}>Trabalhando como Analista de Mídias Sociais</Text>
          <Text style={styles.info}></Text>
          <Text style={styles.info}></Text>
          <Text style={styles.info}>Projetos realizados:</Text>
          <Text style={styles.info}>Nenhum</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 20,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 0,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'left',
  },
});
