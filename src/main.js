import Vue from 'vue'
import App from './App'
import '@/assets/css/reset.scss'
import '@/assets/iconfont/iconfont.css'
import routes from './router'
import VueRouter from 'vue-router'
import axios from 'axios';
import store from './stores/store.js'
Vue.use(VueRouter)
import i18n from './i18n'
import Fastclick from 'fastclick'
import Mui from 'vue-awesome-mui';
import Vant from 'vant';
import 'vant/lib/index.css';
import myUtils from './utils/myUtils'
Vue.prototype.myUtils = myUtils;
Vue.use(Vant);
import VueScroller from 'vue-scroller';
Vue.use(VueScroller)
Vue.use(Mui);
let router = new VueRouter({
    routes
})
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

// axios.defaults.baseURL = 'http://192.168.10.158:888/api.php/'
// axios.defaults.baseURL = 'http://127.0.0.1:888/api.php/'
// axios.defaults.baseURL = 'http://os.bibashi.cn/api.php?s='
axios.defaults.baseURL = 'http://apiwb.hkex.link'
// axios.defaults.baseURL = 'http://api.kj.com/'

    /* eslint-disable no-new */
VueRouter.prototype.goBack = function() {
    this.isBack = true
    window.history.go(-1)
}



Fastclick.attach(document.body)

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})


new Vue({
    el: '#app',
    router,
    i18n,
    store,
    components: { App },
    template: '<App/>'
})