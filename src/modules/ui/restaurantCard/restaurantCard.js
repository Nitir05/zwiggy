import { LightningElement, api } from "lwc";

export default class RestaurantCard extends LightningElement {
  @api resData;
  cuisines = this.resData?.info?.cuisines.join(",");
  avgRating = this.resData?.info?.avgRating;
  cloudinaryImageId = this.resData?.info?.cloudinaryImageId;
  name = this.resData?.info?.name;
  time = this.resData?.info?.sla?.slaString;
}
