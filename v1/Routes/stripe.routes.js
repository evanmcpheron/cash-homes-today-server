import express from 'express'
import { stripeRoute } from '../Controllers/Stripe/stripeIndex.controller'
import { currentUser } from '../Middlewares/current-user'

module.exports = () => {
  const router = express.Router()

  // @route    GET /v1/stripe/card
  // @desc     gets all of a users card
  // @access   Public
  router.get(
    '/cards',
    currentUser,
    async (req, res) => await stripeRoute.get.cards(req, res)
  )

  // @route    GET /v1/stripe/card
  // @desc     gets a setup intent object to create a stripe element
  // @access   Public
  router.get(
    '/setup-intent',
    currentUser,
    async (req, res) => await stripeRoute.get.setupIntent(req, res)
  )

  // @route    GET /v1/stripe/card
  // @desc     gets all of a users card
  // @access   Private
  router.post(
    '/add-card',
    currentUser,
    async (req, res) => await stripeRoute.post.addCard(req, res)
  )

  // @route    DELETE /v1/stripe/card
  // @desc     deletes a payment method from a user
  // @access   Private
  router.delete(
    '/card',
    currentUser,
    async (req, res) => await stripeRoute.remove.card(req, res)
  )

  return router
}
