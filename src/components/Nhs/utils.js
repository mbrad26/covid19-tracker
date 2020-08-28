export const formatter = string => {
  let str = string.includes('_')
              ? string.split('_').join(' ')
              : string

  return str.split('_').join(' ')[0].toUpperCase() + str.slice(1);
}
