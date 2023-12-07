import CurrentDayItem from '../Home/components/DayItemInfo/CurrentDayItem';
import { Item } from '../Home/components/DayItemInfo/DayItemInfo';
import styles from './Popup.module.scss';

type Props = {}

const Popup = (props: Props) => {
  const items = [
    {
      icon_id:'temp',
      name:'Температура',
      value:'-13° - ощущается как -15°',
    },
    {
      icon_id:'pressure',
      name:'Давление',
      value:'765мм ртутного столба - нормальное',
    },
    {
      icon_id:'precipitation',
      name:'Осадки',
      value:'Без осадков',
    },
    {
      icon_id:'wind',
      name:'Ветер',
      value:'5 м/с северный - легкий ветер',
    }
  ];

  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
      <div className={styles.current_day_info}>
        <div className={styles.current_day_info_items}>
          {items.map((item: Item) => {
            return <CurrentDayItem key={item.icon_id} item={item} />
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Popup;