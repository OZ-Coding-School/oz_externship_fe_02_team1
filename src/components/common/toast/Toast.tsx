import { Text } from '../text'

export default function Toast() {
  return (
    <div className="flex h-20 w-96 max-w-96 flex-col rounded-lg bg-green-50 p-4.25 leading-tight font-medium text-green-800 outline-1 outline-offset-[-1px] outline-green-200">
      <Text variant="small">성공적으로 저장되었습니다</Text>
      <Text variant="small">변경사항이 성공적으로 적용되었습니다.</Text>
    </div>
  )
}
