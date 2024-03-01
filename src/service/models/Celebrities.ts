import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const celebritySchema = new Schema({
  _id: String,
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
