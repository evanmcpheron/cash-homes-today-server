const express = require('express')

const { routing } = require('../../constants')

const userRoute = require('./user.routes')
const globalRoute = require('./global.routes')
const scrumboardRoute = require('./scrumboard.routes')

module.exports = (application) => {
  const router = express.Router()

  router.use(routing.USER_ROOT, userRoute(application))
  router.use(routing.GLOBAL_ROOT, globalRoute(application))
  router.use(routing.SCRUMBOARD_ROOT, scrumboardRoute(application))

  return router
}
