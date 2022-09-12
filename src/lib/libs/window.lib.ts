export function pushState(hashKey: string, value: string) {
  const hash = window.location.hash.split('/').filter((st) => st !== '')
  hash.push(`${hashKey}/${value}`)
  window.location.hash = hash.join('/')
}

export function popState() {
  if (!window.location.hash) {
    return
  }

  const hash = window.location.hash.split('/').filter((st) => st !== '')
  hash.pop()
  hash.pop()
  window.location.hash = hash.join('/')
}

export function setNewState(state: string) {
  const hash = window.location.hash.split('/').filter((st) => st !== '')
  hash.pop()
  hash.push(state)
  window.location.hash = hash.join('/')
}

export function getState(base: string) {
  const state: any = {}
  const path = window.location.hash
    .substring(1)
    .split('/')
    .filter((st) => st !== '')

  for (const count of Object.keys(path)) {
    if (+count % 2 > 0) {
      state[path[+count - 1]] = path[+count]
    }
  }

  return state[base]
}

export function elementInViewport(el: any) {
  const rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
