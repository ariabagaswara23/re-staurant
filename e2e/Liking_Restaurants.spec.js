/* eslint-disable no-multi-spaces */
Feature('Liking Restaurants');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.fetch-error');
  I.see('Belum ada restoran yang ditambahkan ke list favorite', '#empty');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum ada restoran yang ditambahkan ke list favorite', '#empty');

  I.amOnPage('/');
  I.waitForElement('.restaurant-content h1.restaurant-name', 3);
  I.waitForElement('.restaurant-footer a.restaurant-button', 3);
  I.seeElement('.restaurant-content h1.restaurant-name');
  I.seeElement('.restaurant-footer a.restaurant-button');

  const firstRestaurant = locate('.restaurant-content h1.restaurant-name').first();
  const firstRestaurantBtn = locate('.restaurant-footer a.restaurant-button').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantBtn);

  I.waitForElement('#likeButton', 3);
  I.seeElement('#likeButton');
  const likedRestaurantTitle = await I.grabTextFrom('h2.restaurant-detail-name');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('cancel liking one restaurant', async ({ I }) => {
  I.see('Belum ada restoran yang ditambahkan ke list favorite', '#empty');

  I.amOnPage('/');
  I.waitForElement('.restaurant-footer a.restaurant-button', 3);
  I.seeElement('.restaurant-footer a.restaurant-button');
  const firstRestaurantBtn = locate('.restaurant-footer a.restaurant-button').first();
  I.click(firstRestaurantBtn);

  I.waitForElement('button#likeButton', 3);

  I.seeElement('button#likeButton');
  I.click('button#likeButton');

  I.seeElement('button#likeButton');
  I.click('button#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Belum ada restoran yang ditambahkan ke list favorite', '#empty');
});
