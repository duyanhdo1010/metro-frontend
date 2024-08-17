export function dateConverter(dateString) {
  const date = new Date(dateString);
  const dayInMonth = date.toDateString().split(' ');
  return `${dayInMonth[1]} ${dayInMonth[3]}`;
}

export function fullDateConverter(dateString) {
  const date = new Date(dateString);
  // const dayInMonth = date.toDateString().split(' ');
  // return `${dayInMonth[2]} ${dayInMonth[1]} ${dayInMonth[3]}`;
  return new Intl.DateTimeFormat('vi-VN').format(date);
}
