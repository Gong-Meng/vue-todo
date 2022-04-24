import createApp from "./create-app"

export default context => {
  return new Promise((resolve, rejcet) => {
    const { app, router, store } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return rejcet(new Error('no component matched'))
      }
      Promise.all(matchedComponents.map(Componet => {
        if (Componet.asyncData) {
          return Componet.asyncData({
            route: router.currentRoute,
            store
          })
        }
      })).then(data => {
        // console.log(store.state)
        context.meta = app.$meta()
        resolve(app)
      })
    })
  })
}
