export const getTotalPagesCount = (pageSize: number, totalResults: number) => {
  return Math.ceil(totalResults / pageSize)
}

export const getPagesArray = (pageCount: number) => {
  const result = []
  for (let i = 0; i < pageCount; i++) {
    result.push(i + 1)
  }
  return result
}
export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}