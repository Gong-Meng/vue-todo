import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history', // 路由模式 hash
    // base: '/base/', // 基础路径
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true
    // parseQuery (query) {

    // },
    // stringifyQuery (obj) {

    // }
  })
}
// const router = new Router({
//   routes
// })

// export default router
