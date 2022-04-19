import createApp from "./create-app"

export default context => {
  return new Promise((resolve, rejcet) => {
    const { app, router } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return rejcet(new Error('no component matched'))
      }
      resolve(app)
    })
  })
}
