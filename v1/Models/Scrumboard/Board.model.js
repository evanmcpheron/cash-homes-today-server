const mongoose = require('mongoose')

const { Schema } = mongoose

const BoardSchema = new Schema(
  {
    title: {
      type: String,
      default: 'Untitled Deal',
    },
    description: {
      type: String,
      default: 'description goes here',
    },
    icon: {
      type: String,
      default: '',
    },
    lastActivity: {
      type: Date,
      default: Date.now,
    },
    members: [{ type: String, default: null }],
    lists: [
      {
        cards: [
          {
            type: String,
          },
        ],
        id: {
          type: Schema.Types.ObjectId,
        },
      },
    ],
    settings: {
      cardCoverImages: {
        type: Boolean,
        default: false,
      },
      subscribed: {
        type: Boolean,
        default: false,
      },
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

export const Board = mongoose.model('board', BoardSchema)
