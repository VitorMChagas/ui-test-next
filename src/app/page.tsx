import Head from 'next/head'

import Header from '@/components/header'
import SpeakOutButton from '@components/speak-out-button'

export default function Page() {
  return (
    <>
      <Head>
        <title>Rule of Thumb</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content="Rule of Thumb™ tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. Here users have an easy way to share their opinion on each presented celebrity using vote" />
      </Head>
      <Header />
      <SpeakOutButton />
    </>
  )
}
