import { Outlet } from 'react-router'

import { Footer, Header } from '@components'
import { cn } from '@/utils'

interface LayoutProps {
  maxWidth: 'medium' | 'large'
}

export default function Layout({ maxWidth }: LayoutProps) {
  return (
    <>
      <Header isLoggedin />
      <main className="w-full pt-16 sm:px-20">
        <div
          className={cn(
            'm-auto p-6 sm:p-8',
            maxWidth === 'medium' && 'max-w-4xl',
            maxWidth === 'large' && 'max-w-7xl'
          )}
        >
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
