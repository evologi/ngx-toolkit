import { get } from 'lodash'

interface Page {
  start: number
  end: number
}

export function sortByKey(array: any[], key: string) {
  return [
    ...array.slice().sort((a, b) => {
      const x = get(a, key)
      const y = get(b, key)
      return x < y ? -1 : x > y ? 1 : 0
    }),
  ]
}

export function paginateArray(array: any[], pageSize: number): Page[] {
  const totalCount = array.length

  if (totalCount <= pageSize) {
    return [
      {
        start: 0,
        end: totalCount,
      },
    ]
  }

  const pages: Page[] = []
  let start = 0
  let end = pageSize

  while (totalCount + pageSize > end) {
    pages.push({
      start,
      end,
    })
    start += pageSize
    end += pageSize
  }

  return pages
}

export function moveArrayItemByIndex<T = any>(
  array: T[],
  indexFrom: number,
  indexTo: number
): T[] {
  const item = array[indexFrom]
  array.splice(indexFrom, 1)
  array.splice(indexTo, 0, item)
  return array
}
