import Vue from "vue"

// const text = { // eslint-disable-line no-unused-vars
//   text: '123'
// }

const component = { // eslint-disable-line no-unused-vars
  props: {
    active: {
      // type: Boolean,
      // required: true,
      // default: false,
      validator (value) {
        console.log(value)
        return typeof value === 'boolean'
      }
    },
    propOne: Number
    // onChange: Function
  },
  template: `
   <div>
    <p>Text: {{text}}</p>
    <input type="text" v-model="text"/>
    <span v-show="active">see me if active</span>
    <span @click="handleChange">{{propOne}}</span>
   </div>
  `,
  // mounted () {
  //   this.propOne = 'inner content';
  // },
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  template: `
    <div>
      <comp-one ref='comp1' :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="false" :prop-one="prop2"></comp-one>
    </div>
  `,
  mounted () {
    console.log(this.$refs.comp1)
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  data: {
    prop1: 0,
    prop2: 1
  }
})
