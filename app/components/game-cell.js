import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class BoardCellComponent extends Component {
  @action
  onClick() {
    this.args.onClick();
  }
}
