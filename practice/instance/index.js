import Vue from 'vue'

const app = new Vue({
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {

    }
  }
})

app.$mount('#root')

// let i = 0;
setInterval(() => {
  // i++
  // app.$data.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  // app.obj.a = app.text + i
  // app.$forceUpdate()
  // app.$set(app.obj, 'a', i)
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })

// setTimeout(() => {
//   unWatch()
// }, 2000)

// app.$on('test', (a, b) => {
//   console.log(`时间监听 ${a} ${b}`)
// })

// app.$emit('test', 1, 2)

// app.$once('test', (a, b) => {
//   console.log(`时间监听 ${a} ${b}`)
// })

// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

app.$forceUpdate()
