import styles from './Week.module.scss';

type Props = {}
export type FilterComponent = {
  value: string;
}

const Filter = (props: Props) => {
  const filter_components: FilterComponent[] = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ]
  return (
    <div className={styles.filter_container}>
      <div className={styles.filter_wrapper}>
        {filter_components.map((tab) => {
          return (
            <div className={styles.tab} key={tab.value}>
              {tab.value}
            </div>
          )
        })}
      </div>
      <div className={styles.cancel_button}>
          Отменить
        </div>
    </div>
  )
}

export default Filter;