import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
new Vue({
  render: h => h(App),
}).$mount('#app')
