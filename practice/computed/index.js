import Vue from "vue"

new Vue({
  el: '#root',
  template: `
    <div>
      <span>Name: {{name}}</span>
      <span>Name: {{getName()}}</span>
      <span>Number: {{number}}</span>
      <span>FullName: {{fullName}}</span>
      <p><input type="text" v-model="number"></p>
      <p><input type="text" v-model="firstName"></p>
      <p><input type="text" v-model="lastName"></p>
      <p><input type="text" v-model="name"></p>
      <p><input type="text" v-model="obj.a"></p>
      <p><input type="text" v-model="obj.b"></p>
    </div>
  `,
  data: {
    firstName: 'Jocky',
    lastName: 'Lou',
    number: 0,
    fullName: '',
    obj: {
      a: '123',
      b: '444'
    }
  },
  computed: {
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ') // eslint-disable-line no-unused-vars
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    // firstName () {
    //   this.fullName = this.firstName + ' ' + this.lastName
    // }
    // firstName: {
    //   handler () {
    //     this.fullName = this.firstName + ' ' + this.lastName
    //   },
    //   immediate: true
    // }
    // 'obj.a': {
    //   handler () {
    //     console.log('obj.a')
    //   }
    // },
    // 'obj.b': {
    //   handler () {
    //     console.log('obj.b')
    //   }
    // }
    'obj': {
      handler (value) {
        console.log(value)
        console.log('obj.ab')
      },
      deep: true
    }
  },
  methods: {
    getName () {
      console.log('name invoked')
      return `${this.firstName} ${this.lastName}`
    }
  }
})
