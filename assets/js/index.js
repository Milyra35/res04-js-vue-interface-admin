import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import App from "./App.js";
import App2 from "./App2.js";

window.addEventListener("DOMContentLoaded", function(){
	createApp(App).mount('#nav');
    createApp(App2).mount('#table');
});