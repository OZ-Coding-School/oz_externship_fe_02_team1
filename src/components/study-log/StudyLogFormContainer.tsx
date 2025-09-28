import { useStudyLogForm } from '@hooks'
import { Controller } from 'react-hook-form'

import {
  LoadingState,
  StudyLogFooter,
  StudyLogHeader,
  StudyLogLayout,
  StudyLogMarkdown,
  StudyLogTitle,
} from '@components'
import { useStudyLogForm } from '@hooks'

interface StudyLogFormContainerProps {
  mode: 'create' | 'edit'
}

export default function StudyLogFormContainer({
  mode,
}: StudyLogFormContainerProps) {
  const { form, state, fileHandlers, handlers, isLoading } = useStudyLogForm({
    mode,
  })
  const { uploadedFiles, groupUuid, noteId, isEditMode } = state
  const { handleSubmit, handleGoBack, navigateToLogDetail } = handlers

  if (isEditMode && isLoading) {
    return <LoadingState />
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
              groupUuid={groupUuid!}
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
            isEditMode
              ? () => navigateToLogDetail(groupUuid, noteId)
              : undefined
          }
          onCancel={handleGoBack}
          isLoading={isLoading}
        />
      }
    />
  )
}
