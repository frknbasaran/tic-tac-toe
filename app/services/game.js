import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GameService extends Service {
  @tracked board = Array(9).fill(null);
  @tracked currentPlayer = 'X';
  @tracked winner = null;

  @action
  makeMove(index) {
    // If the cell is already filled or the game has ended, return false
    if (this.board[index] || this.winner) {
      return false;
    }

    // Fill the cell with the current player
    // Do not mutate the array directly, create a new array instead
    this.board = [
      ...this.board.slice(0, index),
      this.currentPlayer,
      ...this.board.slice(index + 1),
    ];

    // Check if the game has ended
    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
      return true;
    } else if (this.board.every((cell) => cell)) {
      this.winner = 'Draw';
      return true;
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      return false;
    }
  }

  checkWinner() {
    const size = 3; // Size of the board (3x3)

    // Check rows and columns
    for (let i = 0; i < size; i++) {
      if (
        this.checkLine(i * size, 1, size) || // Check row
        this.checkLine(i, size, size)
      ) {
        // Check column
        return true;
      }
    }

    // Check diagonals
    return (
      this.checkLine(0, size + 1, size) || // Top-left to bottom-right
      this.checkLine(size - 1, size - 1, size)
    ); // Top-right to bottom-left
  }

  checkLine(start, step, count) {
    const firstCell = this.board[start];
    if (!firstCell) return false;

    for (let i = 1; i < count; i++) {
      if (this.board[start + i * step] !== firstCell) {
        return false;
      }
    }
    return true;
  }

  @action
  resetGame() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
  }
}
