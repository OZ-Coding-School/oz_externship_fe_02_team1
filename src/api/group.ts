import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'

import type { StudyGroupDetailResponse } from '@api'

export const studyApi = {
  getStudyGroupList: async () => {
    const response = await axiosInstance.get(API_PATHS.STUDY_GROUP.LIST)
    return response.data
  },
  getStudyGroupDetail: async (groupUuid: string) => {
    const response = await axiosInstance.get<StudyGroupDetailResponse>(
      API_PATHS.STUDY_GROUP.DETAIL(groupUuid)
    )
    return response.data
  },
  createStudyGroup: async (data: FormData) => {
    const response = await axiosInstance.post(
      API_PATHS.STUDY_GROUP.CREATE,
      data
    )
    return response.data
  },
  updateStudyGroup: async (groupUuid: string, data: FormData) => {
    const response = await axiosInstance.patch(
      API_PATHS.STUDY_GROUP.UPDATE_INFO(groupUuid),
      data
    )
    return response.data
  },
  leaveStudyGroup: async (groupUuid: string) => {
    const response = await axiosInstance.delete(
      API_PATHS.STUDY_GROUP.LEAVE(groupUuid)
    )
    return response.data
  },
  kickGroupMember: async (groupUuid: string, memberUuid: string) => {
    const response = await axiosInstance.delete(
      API_PATHS.STUDY_GROUP.KICK_MEMBER(groupUuid, memberUuid)
    )
    return response.data
  },
  delegateLeader: async (groupUuid: string, data: FormData) => {
    const response = await axiosInstance.post(
      API_PATHS.STUDY_GROUP.DELEGATE(groupUuid),
      data
    )
    return response.data
  },
}
