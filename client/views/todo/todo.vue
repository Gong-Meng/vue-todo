<template>
  <section class="real-app">
    <div class="tab-container">
      <tabs :value="filter" @change="handleChangeTab">

        <tab :label="tab" :index="tab" v-for="tab in stats" :key="tab" />

        <!-- <tab label="tab1" index="1">
          <span>tab content 1</span>
        </tab>
        <tab index="2">
          <span slot="label" style="color: red;">
            tab2
          </span>
          <span>tab content 2</span>
        </tab>
        <tab label="tab3" index="3">
          <span>tab content 3</span>
        </tab> -->
      </tabs>
    </div>
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么?"
      @keyup.enter="addTodo"
    >
    <Item
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @del="deleteTodo"
    />
    <Helper
      :filter="filter"
      :todos="todos"
      @clearAllCompleted="clearAllCompleted"
    />
    <!-- <router-view /> -->
  </section>
</template>

<script>
import Item from './item.vue'
import Helper from './helper.vue'
// let id = 0
import {
  mapState,
  mapActions
} from 'vuex'

export default {
  metaInfo: {
    title: 'The Todo App'
  },
  beforeRouteEnter (to, from, next) {
    console.log(this)
    console.log('todo before enter')
    next(vm => {
      console.log('enter vm.id is', vm.id)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('todo before update')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo before leave')
    // if (global.confirm('are you sure?')) {
    //   next()
    // }
    next()
  },
  props: ['id'],
  mounted () {
    // console.log('todo mounted')
    this.fetchTodos()
  },
  components: {
    Item,
    Helper
  },
  data () {
    return {
      filter: 'all',
      stats: ['all', 'active', 'completed']
    }
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    ...mapActions(['fetchTodos']),
    // addTodo (e) {
    //   this.todos.unshift({
    //     id: id++,
    //     content: e.target.value.trim(),
    //     completed: false
    //   })
    //   e.target.value = ''
    // },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id == id), 1)
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    handleChangeTab (value) {
      this.filter = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666

.add-input
  position relative
  margin 0
  width 100%
  font-size 24px
  font-family inherit
  font-weight inherit
  line-height 1.4em
  border none
  outline none
  color inherit
  box-sizing border-box
  font-smoothing antialiased
  padding 16px 16px 16px 36px
  border none
  box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)

.tab-container
  background-color #fff
  padding 0 15px
</style>
