/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<img src="${CONFIG.BASE_IMG_URL}/medium/${restaurant.pictureId}" alt="${restaurant.name}">
  <h2 class="restaurant__title">${restaurant.name}</h2>
`;

const createRestaurantListItemTemplate = (restaurant) => `
    <article class="restaurant-item">
    <div class="image_wrapper">
        <img class="restaurant-image" src="${CONFIG.BASE_IMG_URL}/small/${restaurant.pictureId}" alt="Restaurant Image">
        <div class="overlay rating">
            <p class="restaurant-rating"><span class="material-symbols-outlined">star</span> ${restaurant.rating}</p>
        </div>
    </div>
    <div class="restaurant-content">
      <p class="restaurant-location"><span class="material-symbols-outlined">
      location_on
      </span> ${restaurant.city}</p>
      <h1 class="restaurant-name">${restaurant.name}</h1>
      <p class="restaurant-description">${restaurant.description.substr(0, 150)}</p>
      <div class="restaurant-footer">
          <a class="restaurant-button" href="/#/detail/${restaurant.id}">Lihat Detail</a>
      </div>
    </div>
    </article> 
`;

export {
  createRestaurantListItemTemplate,
  createRestaurantDetailTemplate,
};
