import { LightningElement } from "lwc";
import { createRouter } from 'lwr/router';
const routes = [
    {
        id: 'home',
        uri: '/',
        handler: () => import('ui/bodyPageHandler'),
        page: {
            type: 'home',
        },
    }
];

export default class App extends LightningElement {
    static renderMode = 'light';
    router = createRouter({ routes });
}