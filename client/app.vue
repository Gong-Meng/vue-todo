<template>
  <div id="app">
    <div id="cover" />
    <div id="loading" v-show="loading">
      <loading></loading>
    </div>
    <Header />
    <!-- <p>{{fullName}} {{counter}}</p>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- <notification content="test notify" /> -->
    <!-- <button @click="notify">click me</button> -->
    <Footer />
  </div>
</template>

<script>
import {
  mapState
  // mapGetters,
  // mapActions,
  // mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Loading from './components/loading/loading.vue'

export default {
  metaInfo: {
    title: 'Jokcy\'s Todo App'
  },
  components: {
    Header,
    Footer,
    Loading
  },
  mounted () {
    // this['a/updateText']('123')
    // this['a/add']()
    // console.log(this.$route)
    // console.log(this.$store, this['a/textPlus'])
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
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })

    // this.updateCount({
    //   num: 445,
    //   num2: 123
    // })
    // this.testAction()
  },
  computed: {
    ...mapState(['loading'])
    // textA () {
    //   return this.$store.state.b.text
    // },
    // ...mapState(['count']),
    // ...mapState({
    //   counter: 'count'
    // }),
    // ...mapState({
    //   // counter: (state) => state.count
    //   // textA: (state) => state.a.text,
    //   // textC: (state) => state.c.text
    // }),
    // ...mapGetters(['fullName', 'a/textPlus'])
    // ...mapGetters({
    //   fullName: 'fullName'
    //   // textPlus: 'a/textPlus'
    // })
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
  //   // ...mapActions(['updateCountAsync', 'a/add', 'testAction']),
  //   ...mapActions(['updateCountAsync']),
  //   // ...mapMutations(['updateCount', 'a/updateText'])
  //   ...mapMutations(['updateCount']),
  //   notify () {
  //     this.$notify({
  //       content: 'test $notify',
  //       btn: 'close'
  //     })
  //   }
  // }
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
#loading{
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(255,255,255,.3)
  z-index 99
  display flex
  align-items center
  justify-content center
}
</style>
