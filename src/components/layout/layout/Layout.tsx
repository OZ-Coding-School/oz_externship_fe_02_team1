import { Outlet } from 'react-router'

import { Footer, Header } from '@components'

export default function Layout() {
  return (
    <>
      <Header isLoggedin />
      <main className="m-auto max-w-7xl p-6 sm:mx-20 sm:p-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
