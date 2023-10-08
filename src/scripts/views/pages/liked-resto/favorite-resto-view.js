/* eslint-disable no-shadow */
/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoView {
  getTemplate() {
    return `
    <div class="content">
            <input id="query" type="text"  placeholder="Search Resto...">
            <h2 class="content__heading">Your Favorite Resto</h2>
              <div id="restaurants" class="restaurants">
              </div>
          </div>
  `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(restaurant) {
    this.showFavoriteResto(restaurant);
  }

  showFavoriteResto(restaurant) {
    let html;
    if (restaurant.length) {
      html = restaurant.reduce(
        (carry, restaurant) =>
          carry.concat(createRestoItemTemplate(restaurant)),
        ''
      );
    } else {
      html = this._getEmptyRestoTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestoTemplate() {
    return `
      <div class="resto-item__not__found">
        Tidak ada resto untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestoView;
