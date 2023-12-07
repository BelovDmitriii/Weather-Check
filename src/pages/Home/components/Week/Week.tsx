import Card from './Card';
import styles from './Week.module.scss';

type Props = {}
export type Day = {
  current_day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Week = (props: Props) => {
  const week: Day[] = [
    {
      current_day: 'Сегодня',
      day_info: '7 декабря',
      icon_id: 'snow',
      temp_day: '-13',
      temp_night: '-15',
      info: 'Облачно',
    },
    {
      current_day: 'Завтра',
      day_info: '8 декабря',
      icon_id: 'rain',
      temp_day: '-13',
      temp_night: '-15',
      info: 'Облачно',
    },
    {
      current_day: 'Сегодня',
      day_info: '9 декабря',
      icon_id: 'sun-cloud',
      temp_day: '-13',
      temp_night: '-15',
      info: 'Облачно',
    },
    {
      current_day: 'Сегодня',
      day_info: '10 декабря',
      icon_id: 'sun-snow',
      temp_day: '-13',
      temp_night: '-15',
      info: 'Облачно',
    },
    {
      current_day: 'Сегодня',
      day_info: '11 декабря',
      icon_id: 'sun',
      temp_day: '-13',
      temp_night: '-15',
      info: 'Облачно',
    },
    {
      current_day: 'Сегодня',
      day_info: '12 декабря',
      icon_id: 'thunder',
      temp_day: '-13',
      temp_night: '-15',
      info: 'Облачно',
    },
    {
      current_day: 'Сегодня',
      day_info: '13 декабря',
      icon_id: 'sun-snow',
      temp_day: '-13',
      temp_night: '-15',
      info: 'Облачно',
    },
  ]

  return (
    <div className={styles.week}>
      {week.map((item: Day) => {
        return <Card key={item.current_day} day={item}/>
      })}
    </div>
  )
}

export default Week