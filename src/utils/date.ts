export const addDays = (date: Date | string, days: number): Date => {
  const baseDate = typeof date === 'string' ? new Date(date) : date;
  const next = new Date(baseDate)
  next.setDate(next.getDate() + days)
  return next
}
