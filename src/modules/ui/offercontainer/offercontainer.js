import { LightningElement, api, track } from "lwc";
import { scrollFunction } from "utils/helperFunctions";
export default class Offercontainer extends LightningElement {
  static renderMode = "light";
  @api data;

  handleNavigateForward() {
    const offerContainer = this.querySelector('[data-id="offerContainer"]');
    const offer = this.querySelector('[data-id="offerCard"]');
    scrollFunction(offerContainer, offer, "forward", 2);
  }

  handleNavigateBack() {
    const offerContainer = this.querySelector('[data-id="offerContainer"]');
    const offer = this.querySelector('[data-id="offerCard"]');
    scrollFunction(offerContainer, offer, "back", 2);
  }
}
