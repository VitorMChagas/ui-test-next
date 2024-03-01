import mongoose from 'mongoose'

const celebritySchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  category: String,
  picture: String,
  lastUpdated: String,
  votes: {
    positive: Number,
    negative: Number,
  },
})

const Celebrity =
  mongoose.models.Celebrity || mongoose.model('Celebrity', celebritySchema)

export default Celebrity
