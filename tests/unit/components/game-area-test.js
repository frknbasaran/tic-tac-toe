import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('component: game-area', function (hooks) {
  setupRenderingTest(hooks);

  test('it starts with X', async function (assert) {
    await render(hbs`<GameArea />`);
    assert.dom('[data-test-id=player-turn]').hasText('X');
  });

  test('it switch player when X played', async function (assert) {
    await render(hbs`<GameArea />`);
    await click('[data-test-id="cell-0"]');
    assert.dom('[data-test-id=player-turn]').hasText('O');
  });

  test('it should end game when X win', async function (assert) {
    this.set('onGameEnd', (parameter) => {
      assert.strictEqual(parameter, 'X', 'onGameEnd was called with X');
      assert.ok(true, 'onGameEnd was called');
    });
    await render(hbs`<GameArea @onGameEnd={{this.onGameEnd}}/>`);

    await click('[data-test-id="cell-0"]');
    await click('[data-test-id="cell-1"]');
    await click('[data-test-id="cell-3"]');
    await click('[data-test-id="cell-2"]');
    await click('[data-test-id="cell-6"]');
  });

  test('it should end game with Draw when no empty cell remaining', async function (assert) {
    this.set('onGameEnd', (parameter) => {
      assert.strictEqual(parameter, 'Draw', 'onGameEnd was called with Draw');
      assert.ok(true, 'onGameEnd was called');
    });
    await render(hbs`<GameArea @onGameEnd={{this.onGameEnd}}/>`);

    // draw scenario
    // X O X
    // O X X
    // 0 X 0

    await click('[data-test-id="cell-0"]');
    await click('[data-test-id="cell-1"]');
    await click('[data-test-id="cell-2"]');
    await click('[data-test-id="cell-3"]');
    await click('[data-test-id="cell-4"]');
    await click('[data-test-id="cell-8"]');
    await click('[data-test-id="cell-5"]');
    await click('[data-test-id="cell-6"]');
    await click('[data-test-id="cell-7"]');
  });
});
