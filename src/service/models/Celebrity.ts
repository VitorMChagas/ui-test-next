import mongoose from 'mongoose'

const celebritySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    category: String,
    picture: String,
    votes: {
      positive: Number,
      negative: Number,
    },
  },
  { collection: 'celebrities' },
)

const Celebrity =
  mongoose.models.Celebrity || mongoose.model('Celebrity', celebritySchema)

export default Celebrity
