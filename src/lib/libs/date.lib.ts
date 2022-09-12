export function isDate(date: string | object): boolean {
  let isDate = false

  try {
    if (typeof date === 'string') {
      const regEx = /^\d{4}-\d{2}-\d{2}/
      if (!date.match(regEx)) {
        isDate = false
      } else {
        isDate = !isNaN(new Date(date).valueOf())
      }
    } else if (typeof date === 'object') {
      isDate = !isNaN(new Date(date.toString()).valueOf())
    }
  } catch (error) {
    isDate = false
  }

  return isDate
}
