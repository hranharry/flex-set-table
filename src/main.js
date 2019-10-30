import Vue from 'vue'
import App from './App.vue'
import FlexSetTable from './flexSetTable/index'
Vue.use(FlexSetTable)
new Vue({
  el: '#app',
  render: h => h(App)
})
