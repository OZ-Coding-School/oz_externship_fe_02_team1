import { Outlet } from 'react-router'

import { ChatIcon, Footer, Header } from '@components'
import { cn } from '@utils'

interface LayoutProps {
  maxWidth: 'medium' | 'large'
  isBackgroundGray?: boolean
}

export default function Layout({ maxWidth, isBackgroundGray }: LayoutProps) {
  return (
    <>
      <Header />
      <main
        className={cn(
          'w-full pt-16 sm:px-8 lg:px-20',
          isBackgroundGray && 'bg-gray-50'
        )}
      >
        <div
          className={cn(
            'm-auto pt-6 sm:p-8',
            maxWidth === 'medium' && 'max-w-4xl',
            maxWidth === 'large' && 'max-w-7xl'
          )}
        >
          <Outlet />
        </div>
      </main>
      <Footer />

      <ChatIcon />
    </>
  )
}
