import { NextResponse } from 'next/server'
import { prisma } from '@lib/prisma'

export async function GET() {
  try {
    const celebrities = await prisma.celebrity.findMany({
      include: {
        votes: true,
      },
    })

    const result = celebrities.map((item) => ({
      ...item,
      votes: {
        positive: item.votes[0].positive,
        negative: item.votes[0].negative,
      },
    }))
    return NextResponse.json({ celebrities: result }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
