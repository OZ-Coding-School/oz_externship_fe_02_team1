import { useStudyLogForm } from '@hooks'
import { Controller } from 'react-hook-form'
import {
  StudyLogFooter,
  StudyLogHeader,
  StudyLogLayout,
  StudyLogMarkdown,
  StudyLogTitle,
} from '@components'

interface StudyLogFormContainerProps {
  mode: 'create' | 'edit'
}

export default function StudyLogFormContainer({
  mode,
}: StudyLogFormContainerProps) {
  const { form, state, handlers, isLoading } = useStudyLogForm({ mode })
  const { uploadedFiles, groupId, noteId, isEditMode } = state
  const {
    handleFilesAdded,
    handleFileDeleted,
    handleSubmit,
    handleGoBack,
    navigateToLogDetail,
  } = handlers

  if (isEditMode && isLoading) {
    return <div>데이터를 불러오는 중...</div>
  }

  return (
    <StudyLogLayout
      onSubmit={handleSubmit}
      header={<StudyLogHeader mode={mode} />}
      title={
        <Controller
          name="title"
          control={form.control}
          render={({ field }) => <StudyLogTitle {...field} />}
        />
      }
      markdown={
        <Controller
          name="content"
          control={form.control}
          render={({ field }) => (
            <StudyLogMarkdown
              groupUuid={groupId!}
              {...field}
              files={uploadedFiles}
              onFilesAdded={handleFilesAdded}
              onFileDeleted={handleFileDeleted}
            />
          )}
        />
      }
      footer={
        <StudyLogFooter
          onDetail={
            isEditMode ? () => navigateToLogDetail(groupId, noteId) : undefined
          }
          onCancel={handleGoBack}
          isLoading={isLoading}
        />
      }
    />
  )
}
