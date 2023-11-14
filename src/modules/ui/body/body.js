import { LightningElement } from "lwc";
import { getRestaurantData } from "utils/apiCalls";

export default class Body extends LightningElement {
  static renderMode = "light";
  restaurantList;
  connectedCallback() {
    getRestaurantData()
      .then((data) => {
        this.restaurantList = data;
        console.log(this.restaurantList);
      })
      .catch((error) => {
        console.error("Error fetching restaurant data:", error);
      });
  }
}
