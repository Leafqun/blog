import AOS from 'aos'

export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.AOS = new AOS.init()
}
