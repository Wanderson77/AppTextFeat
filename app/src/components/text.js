import React from 'react';
import { Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function components() {
  return (
    <Text style={styles.text}></Text>
  );
}

const styles = StyleSheet.create({
    text:{
        flex:1,
        borderBottomColor:'blue',        
    },
})
