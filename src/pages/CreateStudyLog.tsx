import { useState } from 'react'

import {
  StudyLogFooter,
  StudyLogHeader,
  StudyLogLayout,
  StudyLogMarkdown,
  StudyLogTitle,
  type LogUploadedFile,
} from '@components'
import axios from 'axios'
import axiosInstance from '@/lib/fetcher'

export default function CreateStudyLog() {
  const [uploadedFiles, setUploadedFiles] = useState<LogUploadedFile[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = async (file: File) => {
    try {
      setIsUploading(true)
      const formData = new FormData()
      formData.append('title', 'temp') // 필요하면 실제 값 넣기
      formData.append('content', 'temp')
      formData.append('image_files', file) // 이미지 파일 업로드
      // formData.append('attachment_files', file) // 일반 첨부 파일 업로드 시

      axiosInstance.get
      const { data } = await axios.post(
        `${API_BASE_URL}/study-notes550e8400-e29b-41d4-a716-446655440000/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization:
              'Bearer zM2MmU1NzZiIiwidXNlcl9pZCI6MX0._4BsV5lj5FHlVmO7eUMXTqVb02DhUjrrLEfI70oG5yE',
            'X-CSRFTOKEN':
              'u159g0ZWOrrr1pHVAPVDXUX9ujIhFMM63wgr8V6aIxg7lJqxQa6EemskZ3RQruO6',
          },
        }
      )

      // S3 URL 반환 받기
      const uploadedFile: LogUploadedFile = {
        name: file.name,
        url: data.url, // API가 반환하는 URL
      }

      setUploadedFiles((prev) => [...prev, uploadedFile])
    } catch (err) {
      console.error('파일 업로드 실패', err)
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isUploading) return alert('파일 업로드가 아직 완료되지 않았어요.')

    try {
      const markdownContent = ''
      await axios.post('/api/study-log', {
        content: markdownContent,
        files: uploadedFiles,
      })
      alert('스터디 기록이 저장되었습니다!')
    } catch (err) {
      console.error(err)
      alert('저장 중 오류 발생')
    }
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode="create" />}
      title={<StudyLogTitle />}
      markdown={<StudyLogMarkdown setUploadedFiles={setUploadedFiles} />}
      footer={<StudyLogFooter />}
    />
  )
}
