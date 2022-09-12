import * as _ from 'lodash'

export function flatObject(
  object: any,
  path: string[] = [],
  flatted: any = {}
) {
  Object.keys(object).forEach((key) => {
    if (object[key]) {
      // Set reference
      path.push(key)

      if (object[key] instanceof Date) {
        flatted[path.join('.')] = object[key].toISOString()
      } else if (typeof object[key] === 'object') {
        flatObject(object[key], path, flatted)
      } else {
        flatted[path.join('.')] = object[key]
      }

      path.pop()
    }
  })
  return flatted
}

export function removeEmptyVar(obj: any) {
  return _.pickBy(obj, _.identity)
}

export function removeEmptyObjects(obj: any) {
  return _(obj)
    .pickBy(_.isObject) // pick objects only
    .omitBy(_.isEmpty) // remove all empty objects
    .assign(_.omitBy(obj, _.isObject)) // assign back primitive values
    .value()
}
