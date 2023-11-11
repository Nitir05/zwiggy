import { LightningElement, api } from "lwc";

export default class RestaurantContainer extends LightningElement {
  @api restaurantList;
  renderedCallback() {
    console.log("Restaurant container rendered ", this.restaurantList);
  }
}
