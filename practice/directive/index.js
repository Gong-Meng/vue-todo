import Vue from "vue"

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-text="text">Text: {{text}}</div>
      <div v-show="active">{{html}}</div>
      <div v-if="active">{{html}}</div>
      <div v-else-if="text === 0">IF ELSE Content</div>
      <div v-else>Else Content</div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}} : {{index}}</li>
      </ul>
      <ul>
        <li v-for="(item, key, index) in obj">{{item}} : {{key}} : {{index}}</li>
      </ul>
      <input type="text" v-model.number="text"/>
      <input type="checkbox" v-model="active"/>
      <div>
        <input type="checkbox" :value="1" v-model="arr"/>
        <input type="checkbox" :value="2" v-model="arr"/>
        <input type="checkbox" :value="3" v-model="arr"/>
      </div>
      <div>
        <input type="radio" value="one" v-model="picked"/>
        <input type="radio" value="two" v-model="picked"/>
      </div>
    </div>
  `,
  data: {
    text: 1,
    active: false,
    html: '<span>this is span</span>',
    arr: [1, 2, 3],
    obj: {
      a: 'a',
      b: 'b',
      c: 'c'
    },
    picked: ''
  }
})
