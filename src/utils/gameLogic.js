export function createEmptyBoard(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
  }
  
  export function checkCollision(board, piece, offset) {
    const { shape } = piece;
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] !== 0) {
          const boardY = offset.y + y;
          const boardX = offset.x + x;
          if (
            boardY < 0 ||
            boardY >= board.length ||
            boardX < 0 ||
            boardX >= board[0].length ||
            board[boardY][boardX] !== 0
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }
  
  export function mergeBoardAndPiece(board, piece, offset) {
    const newBoard = board.map(row => [...row]);
    const { shape } = piece;
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] !== 0) {
          newBoard[offset.y + y][offset.x + x] = shape[y][x];
        }
      }
    }
    return newBoard;
  }
  
  export function clearLines(board) {
    let linesCleared = 0;
    const newBoard = board.filter(row => {
      if (row.every(cell => cell !== 0)) {
        linesCleared++;
        return false; // No incluimos la fila completa
      }
      return true;
    });
    // Agrega filas vacías arriba
    while (newBoard.length < board.length) {
      newBoard.unshift(Array(board[0].length).fill(0));
    }
    return [newBoard, linesCleared];
  }
  
  export function rotateMatrix(matrix, direction = 1) {
    const size = matrix.length;
    const rotated = matrix.map(() => new Array(size).fill(0));
  
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (direction > 0) {
          // Rotación horaria
          rotated[x][size - 1 - y] = matrix[y][x];
        } else {
          // Rotación antihoraria
          rotated[size - 1 - x][y] = matrix[y][x];
        }
      }
    }
    return rotated;
  }
  