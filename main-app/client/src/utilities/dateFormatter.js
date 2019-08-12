export function dateFormatter(timestamp) {
  const date = new Date(timestamp)
  let day = date.getUTCDate()
  let month = date.getUTCMonth() + 1
  let year = date.getUTCFullYear()
  if (day < 10) day = `0${day}`
  if (month < 10) month = `0${month}`

  const [, monthString, , , militaryTime] = date.toString().split(' ')
  return [day, month, year, monthString, militaryTime]
}

export function inputFieldDate(timestamp) {
  const [day, month, year] = dateFormatter(timestamp)
  return `${year}-${month}-${day}`
}

export function databaseDateFormat(timestamp) {
  const [day, month, year] = dateFormatter(timestamp)
  return `${month}-${day}-${year}`
}

export function tableDateFormatter(timestamp) {
  const [day, , year, monthString] = dateFormatter(timestamp)
  return `${monthString} ${day}, ${year}`
}

export function tableCombinedDateFormatter(timestamp) {
  const [day, , year, monthString, militaryTime] = dateFormatter(timestamp)
  const currentDate = `${monthString} ${day}, ${year} — ${localTime(
    militaryTime
  )}`
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
