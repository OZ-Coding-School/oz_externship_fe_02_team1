import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'

import type {
  ScheduleListResponse,
  CreateScheduleRequest,
  CreateScheduleResponse,
  ScheduleDetailResponse,
  ScheduleDatailRequest,
} from '@api'

export const scheduleApi = {
  getScheduleList: async (groupUuid: string) => {
    const response = await axiosInstance.get<ScheduleListResponse>(
      API_PATHS.SCHEDULE.LIST(groupUuid)
    )
    return response.data
  },
  getScheduleDetail: async ({
    scheduleId,
    studyGroupUuid,
  }: ScheduleDatailRequest) => {
    const response = await axiosInstance.get<ScheduleDetailResponse>(
      API_PATHS.SCHEDULE.DETAIL(studyGroupUuid, scheduleId)
    )
    return response.data
  },
  createSchedule: async (data: CreateScheduleRequest) => {
    const response = await axiosInstance.post<CreateScheduleResponse>(
      API_PATHS.SCHEDULE.CREATE,
      data
    )
    return response.data
  },
  updateSchedule: async (scheduleId: number, data: any) => {
    const response = await axiosInstance.patch(
      API_PATHS.SCHEDULE.UPDATE(scheduleId),
      data
    )
    return response.data
  },
  deleteSchedule: async (scheduleId: number) => {
    const response = await axiosInstance.delete(
      API_PATHS.SCHEDULE.DELETE(scheduleId)
    )
    return response.data
  },
}
