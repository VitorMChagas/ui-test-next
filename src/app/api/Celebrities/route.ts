import Celebrity from '@service/models/Celebrity'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const celebrities = await Celebrity.find()
    return NextResponse.json({ celebrities }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
