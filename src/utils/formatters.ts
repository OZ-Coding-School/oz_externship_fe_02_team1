export const formatDate = (date?: Date) => {
  if (!date) return null
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
}

export const formatTime = (date?: Date) => {
  if (!date) return null
  return date.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}
