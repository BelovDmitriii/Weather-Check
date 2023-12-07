import styles from './Week.module.scss';
import { Day } from './Week';
import IconsSvgSelector from '../../../../assets/images/icons/IconsSvgSelector';

type Props = {
  day: Day;
}

const Card = ({day}: Props) => {
  const {current_day, day_info, icon_id, temp_day, temp_night, info} = day;
  return (
    <div className={styles.card}>
      <div className={styles.day}>{current_day}</div>
      <div className={styles.day_info}>{day_info}</div>
      <div className={styles.image}>
        <IconsSvgSelector id={icon_id}/>
      </div>
      <div className={styles.day_temp}>{temp_day}</div>
      <div className={styles.night_temp}>{temp_night}</div>
      <div className={styles.info}>{info}</div>
    </div>
  )
}

export default Card;