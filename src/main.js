import { createApp } from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import "./assets/main.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App).use(VueSweetalert2).use(createPinia()).mount('#app')
