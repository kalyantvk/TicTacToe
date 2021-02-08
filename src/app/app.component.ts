import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TicTacToe';

  value = 'X';

  count = 0;

  gameOver = false;

  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 0;

  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  message: string = 'Draw!';

  fillBoard(x, y) {
    console.log('hi');

    this.count++;
    if (
      document.getElementById(x + '' + y).textContent == '' &&
      !this.gameOver
    ) {
      document.getElementById(x + '' + y).textContent = this.value;
      this.board[x][y] = this.value;
      this.value = this.value == 'X' ? 'O' : 'X';
      console.log(x + '-' + y);
      if (this.checkGameOver()) {
        console.log('fuck offfffffffffff');

        this.gameOver = true;
        this.message = 'Game Over!';
      }
      if (this.count == 9 && !this.gameOver) {
        this.gameOver = true;
      }
    }
  }

  checkGameOver() {
    //for rows
    if (
      this.board[0][0] != '' &&
      this.board[0][1] != '' &&
      this.board[0][2] != '' &&
      this.board[0][0] == this.board[0][1] &&
      this.board[0][1] == this.board[0][2]
    ) {
      this.x1 = 0;
      this.y1 = 50;
      this.x2 = 300;
      this.y2 = 50;
      return true;
    }

    if (
      this.board[1][0] != '' &&
      this.board[1][1] != '' &&
      this.board[1][2] != '' &&
      this.board[1][0] == this.board[1][1] &&
      this.board[1][1] == this.board[1][2]
    ) {
      this.x1 = 0;
      this.y1 = 150;
      this.x2 = 300;
      this.y2 = 150;
      return true;
    }
    if (
      this.board[2][0] != '' &&
      this.board[2][1] != '' &&
      this.board[2][2] != '' &&
      this.board[2][0] == this.board[2][1] &&
      this.board[2][1] == this.board[2][2]
    ) {
      this.x1 = 0;
      this.y1 = 250;
      this.x2 = 300;
      this.y2 = 250;
      return true;
    }

    //for cols
    if (
      this.board[0][0] != '' &&
      this.board[1][0] != '' &&
      this.board[2][0] != '' &&
      this.board[0][0] == this.board[1][0] &&
      this.board[1][0] == this.board[2][0]
    ) {
      this.x1 = 50;
      this.y1 = 0;
      this.x2 = 50;
      this.y2 = 300;
      return true;
    }
    if (
      this.board[0][1] != '' &&
      this.board[1][1] != '' &&
      this.board[2][1] != '' &&
      this.board[0][1] == this.board[1][1] &&
      this.board[1][1] == this.board[2][1]
    ) {
      this.x1 = 150;
      this.y1 = 0;
      this.x2 = 150;
      this.y2 = 300;
      return true;
    }
    if (
      this.board[0][2] != '' &&
      this.board[1][2] != '' &&
      this.board[2][2] != '' &&
      this.board[0][2] == this.board[1][2] &&
      this.board[1][2] == this.board[2][2]
    ) {
      this.x1 = 250;
      this.y1 = 0;
      this.x2 = 250;
      this.y2 = 300;
      return true;
    }

    //for diagonals
    if (
      this.board[0][0] != '' &&
      this.board[1][1] != '' &&
      this.board[2][2] != '' &&
      this.board[0][0] == this.board[1][1] &&
      this.board[1][1] == this.board[2][2]
    ) {
      this.x1 = 0;
      this.y1 = 0;
      this.x2 = 300;
      this.y2 = 300;
      return true;
    }
    if (
      this.board[0][2] != '' &&
      this.board[1][1] != '' &&
      this.board[2][0] != '' &&
      this.board[0][2] == this.board[1][1] &&
      this.board[1][1] == this.board[2][0]
    ) {
      this.x1 = 300;
      this.y1 = 0;
      this.x2 = 0;
      this.y2 = 300;
      return true;
    }
    return false;
  }
}
