import { LightningElement, api, track } from 'lwc';
import { CDN_URL } from 'utils/constants';
export default class Rescard extends LightningElement {
    static renderMode = "light";
    @api res;
    imageLink;
    resName;
    avgRating;
    cuisines;
    sla;
    area;
    

    connectedCallback() {
        this.res = JSON.parse(JSON.stringify(this.res));
        this.imageLink = CDN_URL + this.res?.cloudinaryImageId;
        this.resName = this.res?.name;
        this.avgRating = this.res?.avgRating;
        this.cuisines = this.res?.cuisines.join(',');
        this.sla = this.res?.sla?.slaString;
        this.area = this.res?.areaName;
    }
}