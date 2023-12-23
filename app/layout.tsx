import type { Metadata } from 'next'
import './global.scss'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
