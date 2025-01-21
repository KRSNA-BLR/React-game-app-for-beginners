export const TETROMINOS = {
    I: {
      shape: [
        [0, 'I', 0, 0],
        [0, 'I', 0, 0],
        [0, 'I', 0, 0],
        [0, 'I', 0, 0],
      ],
    },
    O: {
      shape: [
        ['O', 'O'],
        ['O', 'O'],
      ],
    },
    T: {
      shape: [
        [0, 'T', 0],
        ['T', 'T', 'T'],
        [0, 0, 0],
      ],
    },
    S: {
      shape: [
        [0, 'S', 'S'],
        ['S', 'S', 0],
        [0, 0, 0],
      ],
    },
    Z: {
      shape: [
        ['Z', 'Z', 0],
        [0, 'Z', 'Z'],
        [0, 0, 0],
      ],
    },
    J: {
      shape: [
        ['J', 0, 0],
        ['J', 'J', 'J'],
        [0, 0, 0],
      ],
    },
    L: {
      shape: [
        [0, 0, 'L'],
        ['L', 'L', 'L'],
        [0, 0, 0],
      ],
    },
  };
  
  const TETROMINO_KEYS = Object.keys(TETROMINOS);
  
  export function randomTetromino() {
    const randKey = TETROMINO_KEYS[Math.floor(Math.random() * TETROMINO_KEYS.length)];
    return { ...TETROMINOS[randKey] };
  }
  