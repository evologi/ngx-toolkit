export function slugify(txt: string, trim = true, replacer = '_'): string {
  let text = trim ? txt.replace(/^\s+|\s+$/g, '') : txt // trim

  // remove accents, swap ñ for n, etc
  const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/-,:;'
  const to = 'aaaaaaeeeeiiiioooouuuunc______'

  for (let i = 0, l = from.length; i < l; i++) {
    text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  text = text
    .replace(/[^a-zA-Z0-9 _]/g, '') // remove invalid chars
    .replace(/\s+/g, replacer) // collapse whitespace and replace by -
    .replace(/-+/g, replacer) // collapse dashes

  return text
}

export function hexToRgb(
  hex: string
): { r: number; g: number; b: number } | undefined {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (!result) {
    return undefined
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

export function isLightColor(hex: string): boolean {
  const color = hexToRgb(hex)
  if (!color) {
    return false
  }

  const contrast =
    1 - (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255
  return contrast < 0.5
}
