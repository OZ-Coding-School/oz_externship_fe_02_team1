import { CloudArrowUpIcon } from '@heroicons/react/24/outline'

import { Text } from '@components'
import { MAX_FILE_COUNT, MAX_FILE_SIZE_MB } from '@constants'

export const UploadPlaceholder = () => (
  <label
    htmlFor="file-upload"
    className="flex w-full cursor-pointer flex-col items-center justify-center"
  >
    <CloudArrowUpIcon className="h-7 w-8 text-gray-400" aria-hidden="true" />{' '}
    <div>
      <Text variant="small" className="pr-1 text-gray-600">
        파일을 여기에 드래그하거나
      </Text>
      <Text variant="small" className="text-yellow-600">
        클릭하여 선택
      </Text>
    </div>
    <Text variant="extraSmall" className="text-gray-500">
      최대 {MAX_FILE_COUNT}개, 파일당 {MAX_FILE_SIZE_MB}MB까지 업로드 가능
    </Text>
  </label>
)
