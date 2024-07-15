// app/controllers/play.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PlayController extends Controller {
  @service router;

  @action
  onGameEnd(winner) {
    this.router.transitionTo('result', { queryParams: { winner: winner } });
  }
}
