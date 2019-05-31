import './js/common';
import './css/main.css';
import './sass/main.scss';
import ExampleSvelte from './svelte/ExampleSvelte.svelte';

window.Vue = require('vue');

import store from './store';

Vue.component('example-component', require('./components/Example.vue').default);

const app = new Vue ({
    store,
    el: '#app',
    data() {
        return {
            component: false
        };
    }
});

const appSecond = new ExampleSvelte ({
	target: document.body,
});

window.appSecond = appSecond;

export default appSecond;