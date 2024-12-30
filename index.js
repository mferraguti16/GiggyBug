"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var app_vue_1 = require("./src/components/app.vue");
/* import Router from 'vue-router'; */
/* import Home from './src/components/app.vue';*/
var contact_vue_1 = require("./src/components/contact.vue");
var about_vue_1 = require("./src/components/about.vue");
(0, vue_1.createApp)(app_vue_1.default).mount('#app');
Vue.use(Router);
exports.default = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: contact_vue_1.default,
        },
        {
            path: '/about',
            name: 'About',
            component: about_vue_1.default,
        },
    ],
});
