import { Button, Text } from '@components'

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export function ErrorState({
  message = '오류가 발생했습니다.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-4 text-center"
      role="alert"
    >
      <Text variant="large" className="font-bold">
        {message}
      </Text>
      <Text className="text-gray-600">잠시 후 다시 시도해주세요.</Text>

      {onRetry && (
        <Button size="large" onClick={onRetry}>
          다시 시도
        </Button>
      )}
    </div>
  )
}
