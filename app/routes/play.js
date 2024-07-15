import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class PlayRoute extends Route {
  @service router;
  @service game;

  queryParams = {
    reset: { refreshModel: true },
  };

  @action
  navigateToResultView() {
    this.router.transitionTo('result');
  }

  beforeModel(transition) {
    const { reset } = transition.to.queryParams;

    if (reset === 'true') {
      this.game.resetGame();
    }
  }
}
