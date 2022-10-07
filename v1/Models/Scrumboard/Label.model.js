const mongoose = require('mongoose')

const { Schema } = mongoose

const LabelSchema = new Schema(
  {
    boardId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
      },
    },
  }
)

export const Label = mongoose.model('label', LabelSchema)
