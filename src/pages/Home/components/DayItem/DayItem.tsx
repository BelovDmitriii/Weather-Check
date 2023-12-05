import styles from './DayItem.module.scss';
import IconsSvgSelector from '../../../../assets/images/icons/IconsSvgSelector';

type Props = {}

const DayItem = (props: Props) => {
  return (
    <div className={styles.day_info}>
      <div className={styles.top_block}>
        <div className={styles.top_block__wrapper}>
          <div className={styles.current_temperature}>-13°C</div>
          <div className={styles.current_day}>Сегодня</div>
        </div>
        <IconsSvgSelector id='snow' />
      </div>
      <div className={styles.bottom_block}>
        <div className={styles.current_time}>
          Время: <span>23:45</span>
        </div>
        <div className={styles.current_city}>
          Москва
        </div>
      </div>
    </div>
  )
}

export default DayItem;