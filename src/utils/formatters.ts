export const formatDate = (date?: Date) => {
  if (!date) return null
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
}
