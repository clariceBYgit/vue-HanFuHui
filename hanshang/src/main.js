import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入组件
import Myheader from "./components/Myheader"
import Myfooter from "./components/Myfooter"
// import Mylogin from "./components/Mylogin"
// import Myreg from "./components/Myreg"
import Lookforward from "./components/Lookforward"


//  引入全局函数
import global from "./assets/js/common"
Vue.use(global)
Vue.config.productionTip = false
Vue.component('myheader',Myheader);
Vue.component('myfooter',Myfooter);
// Vue.component('mylogin',Mylogin);
// Vue.component('myreg',Myreg);
Vue.component('lookforward',Lookforward);

// Vue.component('global',global);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
