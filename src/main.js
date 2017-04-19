// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import { WechatPlugin, Group, Cell, ConfirmPlugin } from 'vux'

import router from './router'
import store from './store'
import App from './App'
import Header from './components/Header.vue'

FastClick.attach(document.body)

Vue.use(WechatPlugin)
Vue.use(ConfirmPlugin)

Vue.config.productionTip = false

Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('mj-header', Header)

router.beforeEach(function (to, from, next) {
  let jumpSrc = 'http://112.74.34.241:3000/pics/random?show=1'
  const timestamp = new Date().getTime()
  jumpSrc = jumpSrc + '&timestamp=' + timestamp
  store.commit('updateJumpSrc', {jumpSrc})
  store.commit('updateLoadingStatus', {isLoading: true})
  store.commit('updateJumpStatus', {isJump: false})
  if (to.path === '/') {
    router.push({path: '/index'})
  }
  next()
})

router.afterEach((to, from) => {
  store.commit('updateLoadingStatus', {isLoading: false})
  setTimeout(function () {
    store.commit('updateJumpStatus', {isJump: false})
  }, 100)
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
