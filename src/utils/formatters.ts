/**
 * Date 객체를 날짜 또는 날짜와 시간 문자열로 변환합니다.
 * @returns 'YYYY. MM. DD.' 또는 'YYYY. MM. DD. 오전/오후 H:MM' 형식의 문자열. date가 없으면 null.
 */
export const formatDate = (date?: Date) => {
  if (!date) return null

  const hasTime =
    date.getUTCHours() !== 0 ||
    date.getUTCMinutes() !== 0 ||
    date.getUTCSeconds() !== 0

  if (hasTime) {
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

/**
 * Date 객체를 시간 문자열로 변환합니다.
 * @returns 'HH시 MM분' 형식의 문자열. date가 없으면 null.
 */
export const formatTime = (date?: Date) => {
  if (!date) return null
  return (
    date
      .toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      .replace(':', '시 ') + '분'
  )
}

/**
 * Date 객체를 'HH:mm' 형식의 문자열로 변환합니다.
 * @returns 'HH:mm' 형식의 문자열. date가 없으면 null.
 */
export const formatTimeToHHMM = (date?: Date) => {
  if (!date) return null
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

/**
 * Date 객체를 'YYYY-MM-DD HH:mm' 형식의 문자열로 변환합니다.
 * @returns 'YYYY-MM-DD HH:mm' 형식의 문자열. dateString이 없으면 null.
 */
export const formatDateTimeToYYYYMMDDHHMM = (dateString: string) => {
  if (!dateString) return null
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}`
}

/**
 * Date 객체를 '월 일' 형식의 문자열로 변환합니다.
 * @returns '월 일' 형식의 문자열. dateString이 없으면 빈 문자열.
 */
export const formatDateToMonthDay = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month}월 ${day}일`
}

/**
 * Date 객체를 'YYYY-MM-DD' 형식의 문자열로 변환합니다.
 * @returns 'YYYY-MM-DD' 형식의 문자열
 */
export const formatToYMD = (date: Date): string => {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}
