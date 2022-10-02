import { error, success } from '../../Utils/responseAPI.util'

const stripe = require('stripe')(process.env.STRIPE_SK)

export default {
  cards: async (req, res) => {
    if (!req.currentUser) {
      return res
        .status(401)
        .send(error('You must be logged in to see cards', res.statusCode, {}))
    }
    try {
      const cards = await stripe.customers.listPaymentMethods(
        req.currentUser.data.customerId,
        { type: 'card' }
      )

      res
        .status(200)
        .send(success('Available Cards on file', res.statusCode, cards.data))
    } catch (err) {
      console.log('ERR: ', err)
      res.status(500).send(error('Something went wrong', res.statusCode, err))
    }
  },
  setupIntent: async (req, res) => {
    if (!req.currentUser) {
      return res
        .status(401)
        .send(error('You must be logged in to see cards', res.statusCode, {}))
    }

    try {
      const setupIntent = await stripe.setupIntents.create({
        payment_method_types: ['card'],
      })

      res
        .status(200)
        .send(
          success(
            'Client Secret successfully sent',
            res.statusCode,
            setupIntent
          )
        )
    } catch (err) {
      res.status(500).send(error('Something went wrong', res.statusCode, err))
    }
  },
}
