// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 自适应
import './assets/js/flexble'
// 路由就是根据网址的不同，返回不同的内容
import router from './router'
import vuex from "vuex"
import store from "./store/index"
//300ms点击延迟解决
import fastClick from 'fastclick'
// 引入基础样式重置表
import './assets/css/reset.css'
// 移动端1px边框问题解决
import './assets/css/border.css'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入swiper样式
import 'swiper/dist/css/swiper.css'
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入axios，并加到原型链中
import axios from 'axios';
// 允许携带cookie
axios.defaults.withCredentials=true
Vue.prototype.$axios = axios;
//axios的依赖
import QS from 'qs'

Vue.use(Vant);
Vue.prototype.qs = QS;

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);

Vue.use(vuex);

//使用300ms模块
fastClick.attach(document.body);


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
