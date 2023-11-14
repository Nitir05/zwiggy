import { LightningElement } from "lwc";
import {LOGO_URL} from "utils/constants";

export default class Header extends LightningElement {
    static renderMode = "light";
    foodLogoUrl = LOGO_URL;
}