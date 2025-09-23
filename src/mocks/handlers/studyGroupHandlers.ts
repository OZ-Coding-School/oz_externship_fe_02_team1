import { http, HttpResponse } from 'msw'

import { API_BASE_URL, API_PATHS } from '@constants'

export const studyGroupHandlers = [
  // 스터디 그룹 생성
  http.post(
    `${API_BASE_URL}${API_PATHS.STUDY_GROUP.CREATE}`,
    async ({ request }) => {
      const formData = await request.formData()

      const name = formData.get('name') as string
      const introduction = formData.get('introduction') as string | null
      const maxHeadcount = Number(formData.get('max_headcount'))
      const profileImgUrl = formData.get('profile_img_url') as string | null
      const startAt = formData.get('start_at') as string
      const endAt = formData.get('end_at') as string
      const lectures = formData.getAll('lectures').map((id) => Number(id))

      // profile_img는 실제 파일 업로드 대신 파일명만 추출
      const profileImg = formData.get('profile_img') as File | null
      const profileImgName = profileImg ? profileImg.name : null

      return HttpResponse.json(
        {
          uuid: 'group-mock-uuid',
          name,
          introduction,
          maxHeadcount,
          profileImgUrl: profileImgUrl || profileImgName,
          startAt,
          endAt,
          lectures,
          created_at: new Date().toISOString(),
        },
        { status: 201 }
      )
    }
  ),
]
