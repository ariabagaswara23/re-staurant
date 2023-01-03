import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

const hamburger = document.querySelector('#hamburger');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

hamburger.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

data.restaurants.forEach((restaurant) => {
  const dataset = `
       <article class="restaurant-item">
            <div class="image_wrapper">
                <img class="restaurant-image" src="${restaurant.pictureId}" alt="Restaurant Image">
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
                <a class="restaurant-button" href="#">Lihat Detail</a>
            </div>
            </div>
       </article> 
    `;

  document.getElementById('restaurant-list').innerHTML += dataset;
});
