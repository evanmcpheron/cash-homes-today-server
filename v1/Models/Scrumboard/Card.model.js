const mongoose = require('mongoose')

const { Types, Schema } = mongoose

const CardSchema = new Schema(
  {
    activities: [
      {
        id: {
          type: Schema.Types.ObjectId,
          default: new Types.ObjectId(),
        },
        idMember: { type: String },
        message: { type: String },
        time: { type: Number },
        type: { type: String },
      },
    ],
    attachmentCoverId: { type: String },
    attachments: [
      {
        id: {
          type: Schema.Types.ObjectId,
          default: new Types.ObjectId(),
        },
        name: { type: String },
        src: { type: String },
        time: { type: Number },
        type: { type: String },
      },
    ],
    boardId: String,
    checklists: [
      {
        id: {
          type: Schema.Types.ObjectId,
          default: new Types.ObjectId(),
        },
        name: { type: String },
      },
    ],
    dueDate: { type: Number },
    labels: [
      {
        type: String,
      },
    ],
    listId: { type: String },
    memberIds: [
      {
        type: String,
      },
    ],
    subscribed: { type: Boolean, default: false },
    title: { type: String },
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

export const Card = mongoose.model('card', CardSchema)
