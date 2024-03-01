import Header from '@/components/header'
import SpeakOutButton from '@components/speak-out-button'
import CelebrityCard from '@components/celebrity-card'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rule of Thumb',
  description:
    'Rule of Thumb™ tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. Here users have an easy way to share their opinion on each presented celebrity using vote',
}

export default function Page() {
  return (
    <>
      <Header />
      <SpeakOutButton />
      <div className="min-w-[1100px] h-[350px] pt-10 flex justify-center">
        <CelebrityCard />
      </div>
    </>
  )
}
