import { parseISO, format } from 'date-fns'

export default function Date({ date }) {
  const data = parseISO(date)
  return <time dateTime={date}>{format(data, 'LLLL d, yyyy')}</time>
}