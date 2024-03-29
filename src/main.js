import Vue from 'vue'
import App from './app'
import router from './router'

Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(App),
    router
})