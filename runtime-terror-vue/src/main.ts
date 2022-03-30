import {createApp, watch} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia';
import router from './scripts/router/index.js';

loadFonts()

// VERY IMPORTANT
const pinia = createPinia();

// We require the following so pinia's state will persist after reload.
const state = localStorage.getItem("state");
if (state) {
    pinia.state.value = JSON.parse(state);
}

watch(
    // () => pinia.state.value.{storeName}, <- if we only want to store a singular store. Perhaps global?
    pinia.state,
    (state) => {
        localStorage.setItem("state", JSON.stringify(state));
    },
    { deep: true }
)
// END STATE PERSISTENCE BLOCK
const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(pinia);
app.mount('#app');
