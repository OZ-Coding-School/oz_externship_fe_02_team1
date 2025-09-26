import { API_PATHS } from '@constants'
import { axiosInstance } from '@lib'
import type { CreateScheduleRequest, CreateScheduleResponse } from '@api'

export const scheduleApi = {
  getScheduleList: async (groupUuid: string) => {
    const response = await axiosInstance.get(API_PATHS.SCHEDULE.LIST(groupUuid))
    return response.data
  },
  getScheduleDetail: async (scheduleId: number) => {
    const response = await axiosInstance.get(
      API_PATHS.SCHEDULE.DETAIL(scheduleId)
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
