import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(router)

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type';
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'http://localhost:3000';

app.use(VueAxios, axios)


app.mount('#app')
