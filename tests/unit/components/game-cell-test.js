import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('component: game-cell', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the value', async function (assert) {
    this.set('value', 'X');
    await render(hbs`<GameCell @value={{this.value}} />`);
    assert.dom('div').hasText('X');
  });

  test('it has the correct class for X', async function (assert) {
    this.set('value', 'X');
    await render(hbs`<GameCell @value={{this.value}} />`);
    assert.dom('div').hasClass('text-gray-400');
  });

  test('it has the correct class for O', async function (assert) {
    this.set('value', 'O');
    await render(hbs`<GameCell @value={{this.value}} />`);
    assert.dom('div').hasClass('text-gray-800');
  });

  test('it calls handleClick when clicked', async function (assert) {
    this.set('onClick', () => {
      assert.ok(true, 'onClick was called');
    });
    await render(hbs`<GameCell @value="X" @onClick={{this.onClick}} />`);
    await click('div');
  });
});
