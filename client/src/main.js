import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from '../src/api/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 阻止显示生产模式
Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.prototype.Api = Api;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
