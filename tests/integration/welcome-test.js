import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, click, currentURL } from '@ember/test-helpers';

module('Acceptance | game start from welcome', function (hooks) {
  setupApplicationTest(hooks);

  test('start game when user clicked on button', async function (assert) {
    await visit('/welcome');

    await click('[data-test-id="start-game-btn"]');

    assert.strictEqual(
      currentURL(),
      '/play',
      'Should be redirected to play when user starts the game',
    );
  });
});
