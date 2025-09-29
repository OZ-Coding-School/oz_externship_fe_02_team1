import { Checkbox, Text } from '@components'
import { cn } from '@utils'

import type { LectureDetail } from '@models'

interface LectureSelectItemProps {
  lecture: LectureDetail
  isSelected: boolean
  onSelect: (lecture: LectureDetail) => void
}

export default function LectureSelectItem({
  lecture,
  isSelected,
  onSelect,
}: LectureSelectItemProps) {
  return (
    <label
      key={lecture.id}
      className={cn(
        'flex items-center gap-4 rounded-md border p-4 cursor-pointer',
        isSelected ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
      )}
      onClick={() => onSelect(lecture)}
    >
      <img
        src={lecture.thumbnailImg}
        alt={lecture.lectureTitle}
        className="h-20 w-20 rounded-md object-cover"
      />
      <div className="flex-1">
        <Text className="font-semibold">{lecture.lectureTitle}</Text>
        <Text variant="small" className="text-gray-500">
          {lecture.instructor}
        </Text>
        <Text variant="small" className="text-gray-500">
          {lecture.platform}
        </Text>
      </div>
      <div className="flex flex-col items-end">
        <Text className="text-lg font-semibold">
          {lecture.discountPrice.toLocaleString()}원
        </Text>
        <Text variant="small" className="text-gray-400 line-through">
          {lecture.originalPrice.toLocaleString()}원
        </Text>
      </div>
      <Checkbox checked={isSelected} onChange={() => onSelect(lecture)} />
    </label>
  )
}
