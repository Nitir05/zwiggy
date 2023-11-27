import { LightningElement, api, track } from "lwc";
import { scrollFunction } from "utils/helperFunctions";

export default class Foodcategorycontainer extends LightningElement {
  static renderMode = "light";
  @api data;

  handleNavigateForward() {
    const categoryContainer = this.querySelector('[data-id="foodContainer"]');
    const category = this.querySelector('[data-id="categoryCard"]');
    scrollFunction(categoryContainer, category, "forward", 3);
  }

  handleNavigateBackward() {
    const categoryContainer = this.querySelector('[data-id="foodContainer"]');
    const category = this.querySelector('[data-id="categoryCard"]');
    scrollFunction(categoryContainer, category, "back", 3);
  }
}
