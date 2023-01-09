import restaurantData from '../../data/restaurantdata-source';
import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate,
  createCategoryTemplate,
  createMenuTemplate,
  createReviewTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="wrapper">
      <div id="restaurant-detail" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantData.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');

    if (restaurant.error === false) {
      this.successFetch(restaurant, restaurantContainer);
    } else {
      this.failedFetch(restaurantContainer);
    }
  },

  async successFetch(restaurant, restaurantContainer) {
    const detailContainer = restaurantContainer;
    const detailData = restaurant.restaurant;

    let categories = '';
    let foods = '';
    let drinks = '';
    let reviews = '';

    detailData.categories.forEach((category) => {
      categories += createCategoryTemplate(category);
    });

    detailData.menus.foods.forEach((food) => {
      foods += createMenuTemplate(food);
    });

    detailData.menus.drinks.forEach((drink) => {
      drinks += createMenuTemplate(drink);
    });

    detailData.customerReviews.forEach((review) => {
      reviews += createReviewTemplate(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: detailData.id,
        pictureId: detailData.pictureId,
        name: detailData.name,
        categories: detailData.categories,
        description: detailData.description,
        menus: detailData.menus,
        customerReviews: detailData.customerReviews,
        city: detailData.city,
        rating: detailData.rating,
      },
    });

    // eslint-disable-next-line max-len
    detailContainer.innerHTML = createRestaurantDetailTemplate(detailData, categories, foods, drinks, reviews);
  },

  async failedFetch(restaurantContainer) {
    const detailContainer = restaurantContainer;
    detailContainer.innerHTML = `
    <div class="fetch-error">
      <span class="material-symbols-outlined">error</span>
      <p>Oops, terjadi kesalahan!</p>
      <a href="/" class="back-to-home">Kembali ke Home</a>
    </div>
    `;
  },
};

export default Detail;
