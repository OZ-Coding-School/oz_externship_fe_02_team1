import { Checkbox, Text } from '@components'
import { cn } from '@utils'

import type { LectureItem } from '@/api'

interface LectureSelectItemProps {
  lecture: LectureItem
  isSelected: boolean
  onSelect: (lecture: LectureItem) => void
  disabled: boolean
}

export default function LectureSelectItem({
  lecture,
  isSelected,
  onSelect,
  disabled,
}: LectureSelectItemProps) {
  return (
    <label
      key={lecture.uuid}
      className={cn(
        'flex cursor-pointer items-center gap-4 rounded-md border p-4',
        isSelected ? 'border-primary-500 bg-primary-50' : 'border-gray-200',
        disabled && !isSelected && 'cursor-not-allowed opacity-50'
      )}
      onClick={() => !disabled && onSelect(lecture)}
    >
      <img
        src={lecture.thumbnailImg}
        alt={lecture.title}
        className="h-20 w-20 rounded-md object-cover"
      />
      <div className="flex-1">
        <Text className="font-semibold">{lecture.title}</Text>
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
      <Checkbox
        checked={isSelected}
        onChange={() => onSelect(lecture)}
        disabled={disabled && !isSelected}
      />
    </label>
  )
}
