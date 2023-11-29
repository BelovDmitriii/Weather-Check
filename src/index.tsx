import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import Home from './pages/Home/Home';
import MonthStat from './pages/MonthStat/MonthStat';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <MonthStat />
  </React.StrictMode>
);
