import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    props: true,
    // props: (route) => ({ id: route.query.b }),
    // component: () => import('../views/todo/todo.vue'),
    component: Todo,
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'test'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
