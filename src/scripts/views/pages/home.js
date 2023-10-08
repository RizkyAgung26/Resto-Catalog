/* eslint-disable no-shadow */
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Explore Resto</h2>
    <div id="restaurants" class="restaurants">
    </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurant = await TheRestoDbSource.ListResto();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};
export default Home;
