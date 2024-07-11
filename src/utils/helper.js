export function dateConverter(dateString) {
  const date = new Date(dateString);
  const dayInMonth = date.toDateString().split(' ');
  return `${dayInMonth[1]} ${dayInMonth[3]}`;
}
