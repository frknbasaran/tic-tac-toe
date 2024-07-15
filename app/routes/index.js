import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service router;

  // Redirect to the welcome route
  beforeModel() {
    this.router.transitionTo('welcome');
  }
}
