import { Text } from '@/components'

export default function Footer() {
  return (
    <footer className="flex justify-center bg-[#111827] py-12">
      <div className="w-full max-w-7xl px-8">
        <div></div>
        <div className="mt-8 flex justify-center border border-t-gray-800 pt-8">
          <Text className="text-gray-400">
            © 2024 StudyHub. All rights reserved
          </Text>
        </div>
      </div>
    </footer>
  )
}
