import { prisma } from '@lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { celebrityId, vote } = data

  try {
    console.log('Received request with celebrityId:', data)

    const updatedCelebrity = await prisma.celebrity.findFirst({
      where: {
        id: celebrityId,
      },
      include: {
        votes: true,
      },
    })

    if (!updatedCelebrity) {
      console.log('Celebrity not found for ID:', celebrityId)
      return NextResponse.json('Celebrity not found', {
        status: 404,
      })
    }
    const addPositive = (updatedCelebrity.votes[0].positive += 1)
    const addNegative = (updatedCelebrity.votes[0].negative += 1)

    const newVote =
      vote === 'positive'
        ? {
            positive: addPositive,
          }
        : { negative: addNegative }

    const celebrityVote = await prisma.vote.update({
      where: {
        id: updatedCelebrity.votes[0].id,
      },
      data: {
        ...newVote,
      },
    })

    return NextResponse.json({
      message: 'Vote added successfully',
      celebrityVote,
    })
  } catch (error) {
    console.error('Error adding vote:', error)
    return NextResponse.json('Internal server Error', {
      status: 500,
    })
  }
}
