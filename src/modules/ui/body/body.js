import { LightningElement } from "lwc";
import { getRestaurantData } from "utils/apiCalls";

export default class Body extends LightningElement {
  static renderMode = "light";
  restaurantList;
  offerList;
  whatsOnYourMindList;
  connectedCallback() {
    getRestaurantData()
      .then((data) => {
        this.restaurantList = data.restaurants;
        this.offerList = data.offers;
        this.whatsOnYourMindList = data?.whatsOnYourMind;
      })
      .catch((error) => {
        console.error("Error fetching restaurant data:", error);
      });
  }
}
