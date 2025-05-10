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