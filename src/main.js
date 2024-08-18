import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { createRouter, createWebHistory } from 'vue-router';

import CreateItem from './components/pages/CreateItem.vue';
import ItemDetail from './components/pages/ItemDetail.vue';
import ItemsOverview from './components/pages/ItemsOverview.vue';
import UpdateItem from './components/pages/UpdateItem.vue';


axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: ItemsOverview},
        {path: '/create', component: CreateItem},
        {path: '/edit/:id', component: UpdateItem},
        {path: '/detail/:id', component: ItemDetail}

    ]
});

createApp(App).use(router).mount('#app')
