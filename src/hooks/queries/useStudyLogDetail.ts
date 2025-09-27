// src/hooks/queries/log.ts
import { useQuery } from '@tanstack/react-query'

import { logApi } from '@api'
import type { StudyLogDetailResponse } from '@api'
import type { StudyLogDetail } from '@/types'

const QUERY_KEY = {
  studyLogDetail: (group_uuid: string, note_id: number) => [
    'studyLogDetail',
    group_uuid,
    note_id,
  ],
}

export const useStudyLogDetail = (group_uuid: string, note_id: number) => {
  return useQuery({
    queryKey: QUERY_KEY.studyLogDetail(group_uuid, note_id),
    queryFn: () => logApi.getStudyLogDetail(group_uuid, note_id),
    select: (data: StudyLogDetailResponse): StudyLogDetail => ({
      id: data.id,
      studyGroupId: String(data.study_group), // study_group -> studyGroupId
      author: {
        id: data.author.id,
        nickname: data.author.nickname,
        profileImage: data.author.profile_img_url ?? undefined, // profile_img_url -> profileImage
      },
      title: data.title,
      content: data.content,
      images: data.images
        ? data.images.map((img) => ({ id: img.id, imgUrl: img.img_url })) // img_url -> imgUrl
        : null,
      attachments: data.attachments
        ? data.attachments.map((att) => ({
            id: att.id,
            fileName: att.file_name, // file_name -> fileName
            fileUrl: att.file_url, // file_url -> fileUrl
          }))
        : null,
      aiSummary: data.ai_summary // ai_summary -> aiSummary
        ? { summary: data.ai_summary, collapsible: true }
        : null,
      createdAt: data.created_at, // created_at -> createdAt
      updatedAt: data.updated_at, // updated_at -> updatedAt
    }),
    enabled: !!group_uuid && !!note_id, // group_uuid와 note_id가 있을 때만 쿼리
  })
}
