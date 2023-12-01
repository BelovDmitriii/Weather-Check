import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import MonthStat from './pages/MonthStat/MonthStat';
import Header from './pages/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='statistics' element = {<MonthStat />}/>
      </Routes>
    </div>
  );
}

export default App;
