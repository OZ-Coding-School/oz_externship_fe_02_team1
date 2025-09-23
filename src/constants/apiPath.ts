export const API_PATHS = {
  NOTIFICATIONS: {
    LIST: '/notifications',
    READ_ALL: '/notifications/read-all',
    READ_ONE: (notificationId: number) =>
      `/notifications/${notificationId}/read`,
    UNREAD_COUNT: '/notifications/unread-count',
  },

  STUDY_GROUP: {
    LIST: '/study-groups',
    DETAIL: (groupUuid: string) => `/study-groups/${groupUuid}`,
    CREATE: '/study-groups',
    UPDATE_INFO: (groupUuid: string) => `/study-groups/${groupUuid}/leader`,
    LEAVE: (groupUuid: string) => `/study-groups/${groupUuid}/me`,
    KICK_MEMBER: (groupUuid: string, memberUuid: string) =>
      `/study-groups/${groupUuid}/leader/${memberUuid}`,
  },

  SCHEDULE: {
    LIST: (groupUuid: string) => `/schedules/list/${groupUuid}`,
    DETAIL: (scheduleId: number) => `/schedules/${scheduleId}`,
    CREATE: '/schedules/',
    UPDATE: (scheduleId: number) => `/schedules/${scheduleId}/`,
    DELETE: (scheduleId: number) => `/schedules/${scheduleId}`,
  },

  CHAT: {
    ROOMS: '/chat/rooms',
    ROOM_MESSAGES: (studyGroupUuid: string) =>
      `/chat/rooms/${studyGroupUuid}/messages`,
  },

  STUDY_NOTES: {
    UPLOAD: (groupUuid: string) => `/study-notes/${groupUuid}/upload`,
    LIST: (groupUuid: string) => `/study-notes/${groupUuid}/notes/`,
    DETAIL: (groupUuid: string, noteId: number) =>
      `/study-notes/${groupUuid}/notes/${noteId}/`,
    DELETE: (groupUuid: string, noteId: number) =>
      `/study-notes/${groupUuid}/notes/${noteId}/`,
    UPDATE: (groupUuid: string, noteId: number) =>
      `/study-notes/${groupUuid}/notes/${noteId}/`,
    CREATE_AND_SUMMARY: (groupUuid: string) =>
      `/study-notes/${groupUuid}/notes/`,
  },

  LECTURES: {
    LIST: (searchParam: string) => `/lectures/list/${searchParam}`,
    RECOMMEND: (searchKeyword: string) =>
      `/lectures/recommend_categories/${searchKeyword}`,
  },

  REVIEWS: {
    UPDATE: (reviewId: number) => `/reviews/${reviewId}/`,
  },
}
