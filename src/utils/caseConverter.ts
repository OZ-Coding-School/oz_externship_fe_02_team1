const toCamel = (s: string): string => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '')
  })
}

const isObject = (o: any): o is object => {
  return o === Object(o) && !Array.isArray(o) && typeof o !== 'function'
}

export const keysToCamel = (o: any): any => {
  if (isObject(o)) {
    const n: { [key: string]: any } = {}

    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel((o as any)[k])
    })

    return n
  } else if (Array.isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i)
    })
  }

  return o
}
