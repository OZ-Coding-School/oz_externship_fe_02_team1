import { Button, Text } from '@components'

export default function CreateStudyLogFooter() {
  return (
    <footer className="flex justify-between pt-6">
      <Button variant="outline" className="rounded-lg px-6 py-2" type="button">
        <Text variant="base" className="font-medium text-gray-700">
          취소
        </Text>
      </Button>
      <Button className="rounded-lg bg-gray-300 px-6 py-2" type="submit">
        <Text variant="base" className="font-medium text-white">
          기록 저장
        </Text>
      </Button>
    </footer>
  )
}
