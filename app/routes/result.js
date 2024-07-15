import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ResultRoute extends Route {
  @service router;

  queryParams = {
    winner: {
      refreshModel: true,
    },
  };

  beforeModel(transition) {
    const { winner } = transition.to.queryParams;

    if (!winner) {
      this.router.transitionTo('welcome');
    }
  }

  model(params) {
    return params.winner;
  }
}
