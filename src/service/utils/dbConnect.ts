import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to the database')
  } catch (error) {
    console.error('Error when connection to the database:', error)
  }
}

// Exporte a função de conexão
export default connectToDatabase
