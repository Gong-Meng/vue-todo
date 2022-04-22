import model from '../../model/client-model'

const handleError = () => {
  // handle eroor
}

export default { // 异步处理
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num,
        num2: 123
      })
    }, data.time)
  },
  fetchTodos ({ commit }) {
    model.getAllTodos().then(data => {
      commit('fillTodos', data)
    }).catch(err => {
      handleError(err)
    })
  }
}
