import { Text } from '@components'

interface InProgressFooterProps {
  navigateToGroupDetail: () => void
}

export default function InProgressFooter({
  navigateToGroupDetail,
}: InProgressFooterProps) {
  return (
    <button
      type="button"
      onClick={navigateToGroupDetail}
      className="flex cursor-pointer justify-end"
    >
      <Text variant="small" className="font-medium text-yellow-600">
        자세히 보기 -&gt;
      </Text>
    </button>
  )
}
