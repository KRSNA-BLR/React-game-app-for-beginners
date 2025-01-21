import React from 'react';
import { View, StyleSheet } from 'react-native';

const COLORS_MAP = {
  0: '#101820', // fondo "vacío" 
  I: '#E10600', // Rojo brand
  O: '#FFFFFF', // Blanco
  T: '#FFC107', // Amarillo 
  S: '#4CAF50', // Verde
  Z: '#2196F3', // Azul
  J: '#9C27B0', // Morado
  L: '#FF5722', // Naranja
};

function Block({ type }) {
  const color = COLORS_MAP[type] || COLORS_MAP[0];
  return <View style={[styles.block, { backgroundColor: color }]} />;
}

const styles = StyleSheet.create({
  block: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
});

export default Block;
