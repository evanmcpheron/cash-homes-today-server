const mongoose = require('mongoose')

const { Schema } = mongoose

const ListSchema = new Schema(
  {
    boardId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: true,
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

export const List = mongoose.model('list', ListSchema)
