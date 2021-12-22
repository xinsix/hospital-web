import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import $ from 'jquery'

//window.jquery = window.$ = jquery
Vue.config.productionTip = false
Vue.prototype.$=$;
Vue.use(ElementUI);

// 设置浏览器标题
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
