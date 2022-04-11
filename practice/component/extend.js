import Vue from "vue"

const component = { // eslint-disable-line no-unused-vars
  props: {
    active: Boolean,
    // propOne: {
    //   required: true
    // }
    propOne: String
  },
  template: `
   <div>
    <p>Text: {{text}}</p>
    <input type="text" v-model="text"/>
    <span v-show="active">see me if active</span>
    <span @click="handleChange">{{propOne}}</span>
   </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  },
  mounted () {
    console.log('comp mounted')
  }
}

const parent = new Vue({ // eslint-disable-line no-unused-vars
  name: 'parent'
})

const component2 = {
  parent: parent,
  extends: component,
  data () {
    return {
      text: 123
    }
  },
  mounted () {
    // console.log('comp2 mounted')
    console.log(this)
    this.$parent.text = '12312321'
    console.log(this.$parent.$options.name)
  }
}

new Vue({
  // parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: component2
  },
  data: {
    text: '233'
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `,
  mounted () {
    // console.log(this.$parent.$options.name)
  }
})

// const CompVue = Vue.extend(component)
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: 333
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })
