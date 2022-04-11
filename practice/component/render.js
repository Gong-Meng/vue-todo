import Vue from "vue"

const component = {
  name: 'comp',
  props: ['props1'],
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement(
      'div',
      {
        style: this.style
        // on: {
        //   click: () => { this.$emit('click') }
        // }
      },
      [
        // this.$slots.default,
        this.$slots.header,
        this.props1
      ]
    )
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'compoent value'
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp, this.$refs.span)
    // console.log(this.$refs.comp.value, this.$refs.span)
  },
  // template: `
  //     <comp-one ref="comp">
  //       <span ref="span">{{value}}</span>
  //     </comp-one>
  // `,
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.value
        },
        // on: {
        //   click: this.handleClick
        // },
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement(
          'span',
          {
            ref: 'span',
            slot: 'header',
            // domProps: {
            //   innerHTML: '<span>345</span>'
            // }
            attrs: {
              id: 'test-id'
            }
          },
          this.value
        )
      ]
    )
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  }
})
