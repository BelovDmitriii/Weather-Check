import React from 'react';
import styles from './Home.module.scss';
import DayItem from './components/DayItem/DayItem';
import DayItemInfo from './components/DayItemInfo/DayItemInfo';
import Week from './components/Week/Week';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <DayItem />
        <DayItemInfo />
      </div>
      <Week />
    </div>
  )
}

export default Home;