/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#query');

  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__title a');

  const firstResto = locate('.resto__title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const likedRestoName = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('searching resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__title a');

  const name = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto__title a').at(i));

    I.seeElement('#likeButton');
    I.click('#likeButton');

    name.push(await I.grabTextFrom('.resto__name'));

    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = name[1].substring(1, 3);
  const matchingResto = name.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedResto = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(matchingResto.length, visibleLikedResto);

  matchingResto.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(
      locate('.resto__title').at(index + 1)
    );
    assert.strictEqual(name, visibleName);
  });
});
