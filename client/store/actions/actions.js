export default { // 异步处理
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num,
        num2: 123
      })
    }, data.time)
  }
}
