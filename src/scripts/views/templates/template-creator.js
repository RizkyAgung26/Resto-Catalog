/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
<div class="detail">
<div class="resto-detail">
  <h2 class="resto__name">"${restaurant.name}"</h2>
  <img class="resto__poster lazyload" alt="${restaurant.name}" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Address: ${restaurant.address},  Kota ${restaurant.city}</h4>
  <h4>Rating: ${restaurant.rating}</h4>
  <h4>Categories: ${restaurant.categories
    .map((category) => category.name)
    .join(' | ')}</h4>
  </div>
  </div>
  
  <div class="detail-food">
  <h4>Foods</h4>
  <ul>${restaurant.menus.foods
    .map((food, i) => `<li><p>${i + 1}) ${food.name}</p></li>`)
    .join('')}<ul>
        </div>      
        
  <div class="detail-drink">
  <h4>Drinks</h4>
  <ul>
  <ul>${restaurant.menus.drinks
    .map((drink, i) => `<li><p>${i + 1}) ${drink.name}</p></li>`)
    .join('')}<ul>
      </div>
      </div>

      <div class="resto__description">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
   
    <div class="resto__review">
    <h3>Customer Reviews</h3>
    <div class="detail-review">
    ${restaurant.customerReviews
      .map(
        (review) => `
      <div class="detail-review-item">
        <div class="review-header">
          <p class="review-name">${review.name}</p>
          <p class="review-date">${review.date}</p>
        </div>
        <div class="review-body">
          ${review.review}
        </div>
      </div>
    `
      )
      .join('')}
  </div>
      </div>
      </div>
   `;

const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
     <img class="resto-item__header__poster lazyload" alt="${
       restaurant.name || '-'
     }"
     data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">
        ${restaurant.rating} | ${restaurant.city || '-'}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3 class="resto__title"><a href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name || '-'
}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
