import restaurantData from '../../data/restaurantdata-source';
import { createRestaurantListItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero-inner">
        <h1 class="hero-inner-title"><i>Re:<span>staurant</span></i></h1>
        <p class="hero-inner-tagline">Temukan Restaurant favoritmu!</p>
        <a class="hero-inner-button" href="#main">Explore</a>
      </div>
    </div>
    <section>
      <h2 class="title">Kenapa anda harus memilih kami</h2>
      <div class="restaurant-showcase">
        <div class="icon-group">
          <span class="material-symbols-outlined">
            bookmark
          </span>
          <p>Simpan Restoran favoritmu untuk dikunjungi nanti</p>
        </div>
        <div class="icon-group">
          <span class="material-symbols-outlined">
            star
          </span>
          <p>Cari tahu sebagus apa restoran dengan fitur rating dari pengunjung</p>
        </div>
        <div class="icon-group">
          <span class="material-symbols-outlined">
            restaurant
          </span>
          <p>Pilih restoran dengan menu yang cocok untuk kamu dan keluarga</p>
        </div>
      </div>
    </section>
    <section>
      <h2 class="title">Temukan Restaurant Pilihanmu disini!</h2>
      <div class="restaurant-list" id="restaurant-list">

      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantData.restaurantList();
    const restaurantContainer = document.querySelector('.restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListItemTemplate(restaurant);
    });
  },
};

export default Home;
