const _ = require('lodash')

const getInfoData = <T extends object>({
  fields,
  object = {} as T,
}: {
  fields: Array<keyof T>
  object: T
}): Pick<T, (typeof fields)[number]> => {
  return _.pick(object, fields)
}

export { getInfoData }
