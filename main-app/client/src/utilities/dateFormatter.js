export default function dateFormatter(timestamp) {
  const newDate = new Date(timestamp).toDateString().split(' ');
  newDate.shift();
  return newDate.join(' ');
}
