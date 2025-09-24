import { Button, Text } from '@components';

interface StudyLogFooterProps {
  isSubmitting?: boolean;
}

export default function StudyLogFooter({ isSubmitting = false }: StudyLogFooterProps) {
  return (
    <footer className="flex justify-between pt-6">
      <Button variant="outline" className="rounded-lg px-6 py-2" type="button">
        <Text variant="base" className="font-medium text-gray-700">
          취소
        </Text>
      </Button>
      <Button
        className="rounded-lg bg-gray-800 px-6 py-2 disabled:bg-gray-300"
        type="submit"
        disabled={isSubmitting}
      >
        <Text variant="base" className="font-medium text-white">
          {isSubmitting ? '저장 중...' : '기록 저장'}
        </Text>
      </Button>
    </footer>
  );
}
