/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class FavoriteRestoShowPresenter {
  constructor({ view, favoriteResto }) {
    this._view = view;

    this._favoriteResto = favoriteResto;

    this._showFavoriteResto();
  }

  async _showFavoriteResto() {
    const restaurant = await this._favoriteResto.getAllResto();
    this._displayResto(restaurant);
  }

  _displayResto(restaurant) {
    this._view.showFavoriteResto(restaurant);
  }
}

export default FavoriteRestoShowPresenter;
