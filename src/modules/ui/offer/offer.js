import { LightningElement, api, track } from 'lwc';
import { COROUSEL_URL } from "utils/constants";
export default class Offer extends LightningElement {
    static renderMode = "light";
    imageLink;
    altText;
    @api offer;
    connectedCallback() {
        this.imageLink = COROUSEL_URL + this.offer?.imageId;
        this.altText = this.offer?.accessibility?.altText;
    }
}