import { LightningElement, api, track } from "lwc";
import { FOOD_CATEGORY_URL } from "utils/constants";
export default class Foodcategory extends LightningElement {
  static renderMode = "light";
  @api category;
  imageLink;
  altText;
  connectedCallback() {
    this.imageLink = FOOD_CATEGORY_URL + this.category?.imageId;
    this.altText = this.category?.accessibility?.altText;
  }
}
