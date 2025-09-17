import type { ReactNode } from 'react'

interface StudyLogLayoutProps {
  header: ReactNode
  title: ReactNode
  markdown: ReactNode
  footer: ReactNode
  onSubmit: (e: React.FormEvent) => void
}

export default function StudyLogLayout({
  header,
  title,
  markdown,
  footer,
  onSubmit,
}: StudyLogLayoutProps) {
  return (
    <form onSubmit={onSubmit} className="max-w-4xl">
      {header}
      <section className="flex flex-col items-start justify-start rounded-xl border border-gray-200 p-6">
        {title}
        {markdown}
      </section>
      {footer}
    </form>
  )
}
