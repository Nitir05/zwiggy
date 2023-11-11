import { LightningElement } from "lwc";
import { getRestaurantData } from "utils/apiCalls";

export default class Body extends LightningElement {
  static renderMode = "light";
  restaurantList = [];

  connectedCallback() {
    this.restaurantList = getRestaurantData();
  }
}
