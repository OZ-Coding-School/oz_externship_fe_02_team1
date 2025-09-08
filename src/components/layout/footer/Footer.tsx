import { Link } from 'react-router'

import { H3, H4, Text } from '@components'
import { FOOTER_NAV_LISTS } from '@constants'

export default function Footer() {
  return (
    <footer className="flex justify-center bg-gray-900 px-4 py-8 sm:px-20 sm:py-12">
      <div className="w-full max-w-7xl sm:px-8">
        <div className="grid gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <Link to="/">
              <H3 className="text-primary-400 mb-4">StudyHub</H3>
            </Link>
            <Text className="text-gray-300">
              IT 전문가로 성장하는 여정에 함께합니다. 최고의 강의와 스터디
              그룹으로 실무 역량을 키워보세요.
            </Text>
          </div>
          {FOOTER_NAV_LISTS.map((item) => (
            <nav key={item.title}>
              <H4 className="mb-4 text-base font-semibold text-white">
                {item.title}
              </H4>
              <ul className="flex flex-col gap-2 text-gray-300">
                {item.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-8 flex justify-center border border-t-gray-800 pt-8">
          <Text className="text-gray-400">
            © 2024 StudyHub. All rights reserved
          </Text>
        </div>
      </div>
    </footer>
  )
}
