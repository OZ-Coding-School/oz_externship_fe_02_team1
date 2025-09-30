import { Button, Text } from '@components'

interface StudyLogFooterProps {
  onCancel: () => void
  onDetail?: () => void
  isLoading?: boolean
}

export default function StudyLogFooter({
  isLoading,
  onCancel,
  onDetail,
}: StudyLogFooterProps) {
  return (
    <footer className="flex justify-between p-4 pt-6 sm:p-0 sm:pt-6">
      <Button
        variant="outline"
        className="rounded-lg px-6 py-2"
        type="button"
        onClick={onCancel}
      >
        <Text variant="base" className="font-medium text-gray-700">
          취소
        </Text>
      </Button>
      <Button
        className="rounded-lg bg-gray-300 px-6 py-2 disabled:bg-gray-200"
        type="submit"
        disabled={isLoading}
        onClick={onDetail}
      >
        <Text variant="base" className="font-medium text-white">
          {isLoading ? '저장 중...' : '기록 저장'}
        </Text>
      </Button>
    </footer>
  )
}
