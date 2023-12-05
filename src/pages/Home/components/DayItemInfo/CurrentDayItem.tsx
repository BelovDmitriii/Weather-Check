import IndicatorSvgSelector from '../../../../assets/images/icons/indicators/IndicatorSvgSelector';
import { Item } from './DayItemInfo';
import styles from './DayItemInfo.module.scss';

interface Props {
  item: Item;
}

const CurrentDayItem = ({item}: Props) => {
  const {icon_id, name, value} = item;
  return (
    <div className={styles.item}>
      <div className={styles.indicator}>
        <IndicatorSvgSelector id={icon_id}/>
      </div>
      <div className={styles.indicator_name}>{name}</div>
      <div className={styles.indicator_value}>{value}</div>
    </div>
  )
}

export default CurrentDayItem;