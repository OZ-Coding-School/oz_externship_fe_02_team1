import { useState } from 'react'

import {
  BreadCrumb,
  Button,
  H2,
  Input,
  MarkdownEditor,
  Text,
} from '@components'
import { BREAD_CRUMB_PATH } from '@constants'

import type { UploadedFile } from '@/components/create-study-log'
import FileUpload from '@/components/create-study-log/FileUpload'

export default function CreateStudyLog() {
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])

  // todo: api 연결 및 파일 업로드 로직 구현
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    return uploadedFiles
  }

  const handleFilesChange = (files: UploadedFile[]) => {
    setUploadedFiles(files)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl">
      <BreadCrumb items={BREAD_CRUMB_PATH} className="pb-4" />
      <header className="w-full pb-6">
        <H2 className="leading-9 font-bold text-gray-900">스터디 기록 작성</H2>
        <Text className="inline-flex pt-2 text-gray-600">
          학습한 내용을 자세히 기록해보세요
        </Text>
      </header>

      <section className="flex flex-col items-start justify-start rounded-xl border border-gray-200 p-6">
        <div className="w-full">
          <div className="pb-2">
            <Text className="text-sm font-medium text-gray-700">제목 </Text>
            <Text className="text-sm font-medium text-red-500">*</Text>
          </div>
          <Input
            maxLength={99}
            value={title}
            placeholder="스터디 기록의 제목을 입력하세요"
            className="w-full rounded-lg px-3 py-2"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Text variant="small" className="pt-1 font-normal text-gray-500">
            {title.length}/100자
          </Text>
        </div>
        {/* 내용 시작 */}
        <div className="w-full pt-6">
          <Text className="pb-2 text-sm font-medium text-gray-700">내용 </Text>
          <Text className="text-sm font-medium text-red-500">*</Text>

          <MarkdownEditor value={description} onChange={setDescription} />
          <Text className="text-xs font-normal text-gray-500">
            마크다운 문법을 사용할 수 있습니다. 이미지는 드래그 앤 드롭으로
            첨부할 수 있습니다
          </Text>
        </div>
        {/* 첨부파일 시작 */}
        <div className="flex w-full flex-col pt-6">
          <Text className="pb-2 text-sm font-medium text-gray-700">
            첨부 파일
          </Text>
          <FileUpload onChange={handleFilesChange} />
        </div>
      </section>
      {/* 맨 아래 취소, 저장 버튼 */}
      <footer className="flex justify-between pt-6">
        <Button
          variant="outline"
          className="rounded-lg px-6 py-2"
          type="button"
        >
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
    </form>
  )
}
