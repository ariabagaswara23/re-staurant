/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createCategoryTemplate = (category) => `
  <p class="category-item">${category.name}</p>
`;

const createMenuTemplate = (menu) => `
  <p class="menu-item"><span class="material-symbols-outlined">
  arrow_right
  </span> ${menu.name}</p>
`;

const createReviewTemplate = (review) => `
  <div class="customer-review-item">
    <p class="customer-name">${review.name}</p>
    <p class="customer-comment">${review.review}</p>
    <p class="review-date"><span class="material-symbols-outlined">
    schedule
    </span> ${review.date}</p>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant, category, foods, drinks, reviews) => `
<div class="container">
<div class="restaurant-detail-body">
  <img src="${CONFIG.BASE_IMG_URL}/medium/${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-detail-image">
  <div class="restaurant-detail-content">
    <h2 class="restaurant-detail-name">${restaurant.name}</h2>
    <p class="restaurant-detail-rating"><span class="material-symbols-outlined">star</span> ${restaurant.rating}</p>
    <div class="category">
      ${category}
    </div>
    <p class="restaurant-detail-location"><span class="material-symbols-outlined">
    location_on
    </span> ${restaurant.address}, ${restaurant.city}</p>
    <p class="restaurant-detail-description">${restaurant.description}</p>
    <div class="restaurant-menu">
      <h3 class="restaurant-detail-title">Daftar Menu</h3>
      <div class="food">
        <h4 class="menu-title"><span class="material-symbols-outlined">lunch_dining</span> Makanan</h4>
        ${foods}
      </div>
      <div class="drink">
        <h4 class="menu-title"><span class="material-symbols-outlined">local_cafe</span> Minuman</h4>
        ${drinks}
      </div>
    </div>
    <div class="customer-review">
      <h3 class="restaurant-detail-title">Customer Reviews</h3>
      ${reviews}
    </div>
  </div>
  </div>
</div>
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
  createCategoryTemplate,
  createMenuTemplate,
  createReviewTemplate,
};
