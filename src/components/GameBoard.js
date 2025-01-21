import React from 'react';
import { View, StyleSheet } from 'react-native';
import Block from './Block';

const GameBoard = ({ board }) => {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <Block key={cellIndex} color={cell || 'white'} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
    padding: 10,
    borderWidth: 2,
    borderColor: '#333',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default GameBoard;
