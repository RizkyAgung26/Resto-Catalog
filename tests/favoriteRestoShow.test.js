/* eslint-disable no-new */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavoriteRestoView from '../src/scripts/views/pages/liked-resto/favorite-resto-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-show-presenter';

describe('Showing all favorite resto', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoView();
    document.body.innerHTML = view.getTemplate();
  };
  beforeEach(() => {
    renderTemplate();
  });

  describe('When no resto have been liked', () => {
    it('should render the information that no resto have been liked', () => {
      const favoriteResto = {
        getAllResto: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      const restaurants = [];
      presenter._displayResto(restaurants);

      expect(
        document.querySelectorAll('.resto-item__not__found').length
      ).toEqual(1);
    });

    it('should ask for the favorite resto', () => {
      const favoriteResto = {
        getAllResto: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite resto exist', () => {
    it('should show the resto', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restos:updated', () => {
          expect(document.querySelectorAll('.resto-item').length).toEqual(2);
          done();
        });
      const favoriteResto = {
        getAllResto: jest.fn().mockImplementation(() => [
          {
            id: 11,
            name: 'A',
            vote_average: 3,
            overview: 'Sebuah film A',
          },
          {
            id: 22,
            name: 'B',
            vote_average: 4,
            overview: 'Sebuah film B',
          },
        ]),
      };
      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
