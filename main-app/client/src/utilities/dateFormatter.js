export function dateFormatter(timestamp) {
  const newDate = new Date(timestamp).toDateString().split(' ')
  newDate.shift()
  return newDate.join(' ')
}

export function tableDateFormatter(timestamp) {
  const [, month, day, year] = new Date(timestamp).toString().split(' ')
  const currentDate = [`${month} ${day}, ${year}`].join(' ')
  return currentDate
}

export function tableCombinedDateFormatter(timestamp) {
  const [, month, day, year, localTime] = new Date(timestamp)
    .toString()
    .split(' ')
  const currentDate = [
    `${month} ${day}, ${year} ${localTime.slice(0, 5)}`,
  ].join(' ')
  return currentDate
}
