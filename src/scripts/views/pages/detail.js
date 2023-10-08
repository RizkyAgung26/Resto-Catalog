/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
    
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestoDbSource.DetailResto(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      restaurant: {
        id: url.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};
export default Detail;
