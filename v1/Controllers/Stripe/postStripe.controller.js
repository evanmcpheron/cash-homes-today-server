import { success } from '../../Utils/responseAPI.util'

const stripe = require('stripe')(process.env.STRIPE_SK)

module.exports = {
  addCard: async (req, res) => {
    const { id } = req.body
    const paymentMethod = await stripe.paymentMethods.attach(id, {
      customer: req.currentUser.data.customerId,
    })

    const customer = await stripe.customers.listPaymentMethods(
      req.currentUser.data.customerId,
      { type: 'card' }
    )

    if (customer.data.length === 1) {
      await stripe.customers.update(req.currentUser.data.customerId, {
        invoice_settings: { default_payment_method: paymentMethod.id },
      })
    }

    res
      .status(200)
      .send(success('Card Successfully added', res.statusCode, paymentMethod))
  },
}
