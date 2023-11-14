import { LightningElement, api, track } from 'lwc';
export default class Rescontainer extends LightningElement {
    static renderMode = "light";
    @api data;
}