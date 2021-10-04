import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import colors from 'vuetify/lib/util/colors'
Vue.config.productionTip = false

new Vue({
  vuetify, colors,
  render: h => h(App)
}).$mount('#app')
