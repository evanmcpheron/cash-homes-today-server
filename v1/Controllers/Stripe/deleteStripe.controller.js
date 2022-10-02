import { success, error } from '../../Utils/responseAPI.util'

const stripe = require('stripe')(process.env.STRIPE_SK)

module.exports = {
  card: async (req, res) => {
    const { id } = req.body
    try {
      await stripe.paymentMethods.detach(id)

      const cards = await stripe.customers.listPaymentMethods(
        req.currentUser.data.customerId,
        { type: 'card' }
      )

      res
        .status(200)
        .send(success('Payment Method detached.', res.statusCode, cards))
    } catch (err) {
      res.status(400).send(error('Something went wrong', res.statusCode, err))
    }
  },
}
