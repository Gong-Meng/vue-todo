import Vue from 'vue' // 引用vue类库
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// import './assets/styles/test.css'
// import './assets/styles/test-stylus.styl'
// import './assets/images/bg.png'
// 开发todo应用时用不到以上这些,故注释掉

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})

// 监听state
// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watched:', newCount)
// })

// mutation 事件订阅
// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

// store.subscribeAction((action, state) => {
//   console.log(action.type)
//   console.log(action.payload)
// })

// const root = document.createElement('div') // 创建div节点
// document.body.appendChild(root) // 将div节点添加到body下

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // console.log(to.fullPath)
  // if (to.fullPath === '/app') {
  //   next({
  //     path: '/login'
  //   })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  store,
  router,
  render: (h) => h(App)
  // vue在创建Vue实例时,通过调用render方法来渲染实例的DOM树,也就是这个组件渲染的是App的内容
  // vue在调用render方法时,会传入一个createElement函数作为参数,也就是这里的h的实参是createElement函数,然后createElement会以App为参数进行调用
}).$mount('#root') // 挂载html的root节点下面
