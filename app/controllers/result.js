import Controller from '@ember/controller';

export default class ResultController extends Controller {
  queryParams = ['winner'];
  winner = null;
}
