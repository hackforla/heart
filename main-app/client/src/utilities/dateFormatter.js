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
  const [, month, day, year, militaryTime] = new Date(timestamp)
    .toString()
    .split(' ')
  const currentDate = [
    `${month} ${day}, ${year} — ${localTime(militaryTime)}`,
  ].join(' ')
  return currentDate
}

const localTime = militaryTime => {
  const [hour, minutes] = militaryTime.slice(0, 5).split(':')
  if (hour <= 12) {
    return `${hour}:${minutes} AM`
  } else {
    return `${hour - 12}:${minutes} PM`
  }
}
