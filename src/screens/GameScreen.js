import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import LogoImage from '../../assets/logo2.png'; 

import {
  createEmptyBoard,
  checkCollision,
  mergeBoardAndPiece,
  clearLines,
  rotateMatrix,
} from '../utils/gameLogic';
import { randomTetromino } from '../utils/tetrominoes';
import Block from '../components/Block';

const ROWS = 20;
const COLS = 10;

function GameScreen() {
  // ESTADOS PRINCIPALES
  const [board, setBoard] = useState(createEmptyBoard(ROWS, COLS));
  const [currentPiece, setCurrentPiece] = useState(randomTetromino());
  const [offset, setOffset] = useState({ x: 3, y: 0 });

  // Score, líneas, nivel
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);

  // Velocidad de caída (ms)
  const [dropTime, setDropTime] = useState(1000);

  // Nuevo: Pausa y Game Over
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // --- FUNCIONES PRINCIPALES ---

  // 1. Generar una nueva pieza en la parte superior
  const startNewPiece = useCallback(() => {
    const newTetro = randomTetromino();
    const initialOffset = { x: 3, y: 0 };

    // Si al generar la nueva pieza colisiona inmediatamente => Game Over
    if (checkCollision(board, newTetro, initialOffset)) {
      setIsGameOver(true);
      return; // No colocar la pieza
    }
    setCurrentPiece(newTetro);
    setOffset(initialOffset);
  }, [board]);

  // 2. Bajar la pieza
  const drop = useCallback(() => {
    // Si está pausado o en Game Over, no hacemos nada
    if (isPaused || isGameOver) return;

    const newOffset = { x: offset.x, y: offset.y + 1 };
    if (!checkCollision(board, currentPiece, newOffset)) {
      // Sin colisión, movemos la pieza abajo
      setOffset(newOffset);
    } else {
      // Colisiona: pegamos la pieza
      const merged = mergeBoardAndPiece(board, currentPiece, offset);
      const [cleared, linesCleared] = clearLines(merged);

      // Sumar puntos por líneas completas
      if (linesCleared > 0) {
        const linePoints = [0, 40, 100, 300, 1200]; // Tetris scoring
        const gainedPoints = linePoints[linesCleared] * level;
        setScore(score + gainedPoints);
        setLines(lines + linesCleared);

        // Subir de nivel cada 10 líneas
        if (lines + linesCleared >= level * 10) {
          const newLevel = level + 1;
          setLevel(newLevel);
          setDropTime(Math.max(100, dropTime * 0.9)); // acelera la caída
        }
      }

      // Actualizamos el board
      setBoard(cleared);

      // Intentar crear nueva pieza
      startNewPiece();
    }
  }, [
    board,
    currentPiece,
    offset,
    lines,
    level,
    score,
    dropTime,
    isPaused,
    isGameOver,
    startNewPiece,
  ]);

  // useEffect que maneja el intervalo de caída automática
  useEffect(() => {
    // Si está pausado o en Game Over, no hay “tick”
    if (isPaused || isGameOver) {
      return;
    }
    const timer = setInterval(() => {
      drop();
    }, dropTime);
    return () => clearInterval(timer);
  }, [drop, dropTime, isPaused, isGameOver]);

  // 3. Movimientos laterales
  const moveLeft = () => {
    if (isPaused || isGameOver) return;
    const newOffset = { x: offset.x - 1, y: offset.y };
    if (!checkCollision(board, currentPiece, newOffset)) {
      setOffset(newOffset);
    }
  };

  const moveRight = () => {
    if (isPaused || isGameOver) return;
    const newOffset = { x: offset.x + 1, y: offset.y };
    if (!checkCollision(board, currentPiece, newOffset)) {
      setOffset(newOffset);
    }
  };

  // 4. Rotar la pieza
  const rotatePiece = () => {
    if (isPaused || isGameOver) return;
    const rotatedShape = rotateMatrix(currentPiece.shape, 1);
    const newPiece = { ...currentPiece, shape: rotatedShape };
    if (!checkCollision(board, newPiece, offset)) {
      setCurrentPiece(newPiece);
    }
  };

  // 5. Renderizar el “board + pieza actual”
  const renderBoard = () => {
    const tempBoard = board.map(row => [...row]);
    currentPiece.shape.forEach((row, yIndex) => {
      row.forEach((cell, xIndex) => {
        if (cell !== 0) {
          const boardY = offset.y + yIndex;
          const boardX = offset.x + xIndex;
          if (
            boardY >= 0 &&
            boardY < ROWS &&
            boardX >= 0 &&
            boardX < COLS
          ) {
            tempBoard[boardY][boardX] = cell;
          }
        }
      });
    });
    return tempBoard;
  };

  // --- BOTONES ADICIONALES ---

  // Pausar/Reanudar
  const togglePause = () => {
    if (isGameOver) return; // No pausar si ya está en game over
    setIsPaused(!isPaused);
  };

  // Reiniciar el juego por completo
  const resetGame = () => {
    setIsGameOver(false);
    setIsPaused(false);
    setBoard(createEmptyBoard(ROWS, COLS));
    setCurrentPiece(randomTetromino());
    setOffset({ x: 3, y: 0 });
    setScore(0);
    setLines(0);
    setLevel(1);
    setDropTime(1000);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={LogoImage}
        style={{ width: 300, height: 150, resizeMode: 'contain', marginBottom: 10 }}
      />

      <Text style={styles.title}>React-Game-App-for-Beginners</Text>

      {/* Marcadores */}
      <View style={styles.scoreBoard}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Text style={styles.scoreText}>Lines: {lines}</Text>
        <Text style={styles.scoreText}>Level: {level}</Text>
      </View>

      {/* Board */}
      <View style={styles.board}>
        {renderBoard().map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <Block key={cellIndex} type={cell} />
            ))}
          </View>
        ))}
      </View>

      {/* Controles */}
      {!isGameOver && (
        <View style={styles.controls}>
          <Button title="←" onPress={moveLeft} />
          <Button title="Rotate" onPress={rotatePiece} />
          <Button title="→" onPress={moveRight} />
          <Button title="↓" onPress={drop} />
        </View>
      )}

      {/* Barra inferior: Pausa & Reiniciar */}
      <View style={styles.bottomControls}>
        <Button
          title={isPaused ? 'Resume' : 'Pause'}
          onPress={togglePause}
          disabled={isGameOver}
        />
        <Button title="Restart" onPress={resetGame} />
      </View>

      {/* Mensaje de Game Over */}
      {isGameOver && (
        <Text style={styles.gameOverText}>
          GAME OVER
        </Text>
      )}
    </View>
  );
}

export default GameScreen;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 10,
  },
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  board: {
    backgroundColor: '#101820',
    borderWidth: 2,
    borderColor: '#E10600',
  },
  row: {
    flexDirection: 'row',
  },
  controls: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
  bottomControls: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: '80%',
  },
  gameOverText: {
    marginTop: 20,
    color: '#E10600',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
