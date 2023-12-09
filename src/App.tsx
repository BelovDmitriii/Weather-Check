import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import MonthStat from './pages/MonthStat/MonthStat';
import Header from './pages/Header/Header';
// import Popup from './pages/Popup/Popup';

function App() {
  return (
    <div className="global_container">
      {/* <Popup /> */}
      <div className="container">
      <Header />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='statistics' element = {<MonthStat />}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
