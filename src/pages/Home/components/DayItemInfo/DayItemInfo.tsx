import styles from './DayItemInfo.module.scss';
import clouds from '../../../../assets/images/clouds.png';
import CurrentDayItem from './CurrentDayItem';

interface Props {};
export interface Item {
  icon_id: string;
  name: string;
  value: string;
};

const DayItemInfo = (props: Props) => {
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
    <div className={styles.current_day_info}>
      <div className={styles.current_day_info_items}>
        {items.map((item: Item) => {
          return <CurrentDayItem key={item.icon_id} item={item} />
        })}
      </div>
      <img className={styles.cloud_image} src={clouds} alt="clouds" />
    </div>
  )
}

export default DayItemInfo