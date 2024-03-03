import Celebrity from '@service/models/Celebrity'
import connectToDatabase from '@service/utils/dbConnect'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {
  await connectToDatabase()

  const data = await req.json()
  const { celebrityId, voteType, name } = data

  try {
    console.log('Received request with celebrityId:', celebrityId)

    const updatedCelebrity = await Celebrity.find({
      _id: celebrityId,
    })

    if (!updatedCelebrity) {
      console.log('Celebrity not found for ID:', celebrityId)
      return NextResponse.json('Celebrity not found', {
        status: 404,
      })
    }

    return NextResponse.json({
      message: 'Vote added successfully',
      updatedCelebrity: updatedCelebrity[0].data,
    })
  } catch (error) {
    console.error('Error adding vote:', error)
    return NextResponse.json('Internal server Error', {
      status: 500,
    })
  }
}
