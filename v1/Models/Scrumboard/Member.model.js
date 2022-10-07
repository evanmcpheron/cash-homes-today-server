const mongoose = require('mongoose')

const { Schema } = mongoose

const MemberSchema = new Schema(
  {
    avatar: {
      type: String,
      default: 'default-avatar.jpg',
    },
    name: {
      type: String,
      default: '',
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

export const Member = mongoose.model('member', MemberSchema)
