import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async ListResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async DetailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestoDbSource;
