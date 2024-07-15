import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class GameBoardComponent extends Component {
  @service game;

  @action
  onGameEnd(winner) {
    this.args.onGameEnd(winner);
  }

  @action
  makeMove(index) {
    const gameEnded = this.game.makeMove(index);
    if (gameEnded) {
      this.onGameEnd(this.game.winner);
    }
  }

  @action
  resetGame() {
    this.game.resetGame();
  }
}
