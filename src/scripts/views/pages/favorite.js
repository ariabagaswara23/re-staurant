import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="wrapper-favorite">
      <h2 class="title">List Restaurant Favoritmu</h2>
      <div id="restaurant-favorite" class="restaurant-favorite"></div>
      <div class="restaurant-favorite-error"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant-favorite');
    const restaurantsErrorContainer = document.querySelector('.restaurant-favorite-error');
    console.log(restaurants);

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantListItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.style.visibility = 'hidden';
      restaurantsErrorContainer.innerHTML = `
        <div class="fetch-error">
          <span class="material-symbols-outlined">search</span>
          <p>Belum ada restoran yang ditambahkan ke list favorite</p>
          <a href="/" class="back-to-home">Kembali ke Home</a>
        </div>
      `;
    }
  },
};

export default Favorite;
