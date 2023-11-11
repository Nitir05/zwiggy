import { LightningElement } from "lwc";
import { getRestaurantData } from "utils/apiCalls";

export default class Body extends LightningElement{
    static renderMode = 'light';
    restaurentList = [];

    connectedCallback() {
        this.restaurentList=getRestaurantData();
        console.log(this.restaurentList);
    }
}