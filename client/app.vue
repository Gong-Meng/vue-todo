<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <p>{{fullName}} {{counter}}</p>
    <!-- <Todo /> -->
    <router-link to="/app">app</router-link>
    <!-- <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link> -->
    <router-link to="/login">login</router-link>
    <!-- <router-link to="/login/exact">login exact</router-link> -->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    // console.log(this.$route)
    console.log(this.$store)
    // this.$store.state.count = 1
    // let i = 1
    // setInterval(() => {
    //   // this.$store.commit('updateCount', i++)
    //   this.$store.commit('updateCount', {
    //     num: i++,
    //     num2: 123
    //   })
    // }, 1000)
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })

    this.updateCount({
      num: 445,
      num2: 123
    })
  },
  computed: {
    // ...mapState(['count']),
    // ...mapState({
    //   counter: 'count'
    // }),
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapGetters(['fullName'])
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  }
}
</script>

<style lang="stylus" scoped>
#app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #999
        opacity 0.2
        z-index -1

</style>
