import Celebrity from '@service/models/Celebrity'
import connectToDatabase from '@service/utils/dbConnect'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectToDatabase()

  try {
    const celebrities = await Celebrity.find()
    return NextResponse.json({ celebrities }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
