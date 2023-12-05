import React from 'react';
import styles from './Home.module.scss';
import DayItem from '../DayItem/DayItem';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={styles.home}>
      <DayItem />
    </div>
  )
}

export default Home;