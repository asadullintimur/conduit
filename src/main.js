import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);

//check auth before mount app
store.dispatch("auth/check")
    .finally(() => {
        app.use(store)
            .use(router)
            .mount('#app')
    })
