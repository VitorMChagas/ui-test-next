import type { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Rule of Thumb',
  description:
    'Rule of Thumb™ tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. Here users have an easy way to share their opinion on each presented celebrity using vote',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
