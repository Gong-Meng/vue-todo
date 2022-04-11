import Vue from "vue"

new Vue({
  el: '#root',
  // template: `
  // <div v-bind:id="aaa" v-on:click="handleClick">
  //  {{isActive ? 'active' : 'not active'}}
  //  <p v-html="html"></p>
  // </div>
  // `,
  template: `
    <div
      :class="[{active: isActive}]"
      :style="[styles, styles2]"
    >
      {{getJoinArr(arr)}}
    </div>
  `,
  data: {
    isActive: false,
    html: '<span>1234</span>',
    aaa: 'main',
    arr: [1, 2, 3],
    styles: {
      color: 'red'
    },
    styles2: {
      fontSize: '100px'
    }
  },
  methods: {
    handleClick () {
      alert(123) // eslint-disable-line
    },
    getJoinArr (arr) {
      return arr.join(' ')
    }
  }
})
