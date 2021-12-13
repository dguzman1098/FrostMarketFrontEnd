
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTickersComponent from './components/AllTickersComponent';
import React, { useEffect } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import Footer from './components/Footer'
import Header from './components/Header'
import StockChart from './components/StockChart';
import TickerNews from './components/TickerNews'
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap'
import ViewTickerData from './components/ViewTickerData';
import SingleTickerNews from './components/SingleTickerNews';
import TickerDetails from './components/TickerDetails';

const App = () => {

  return (
    <div className="App" >

      <div className='content'>
      
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/home" element={<TickerNews />}/>
        <Route exact path="/home/tickers" element={<AllTickersComponent />}/>
        <Route exact path="/home/ticker-news" element={<TickerNews />}/>
        <Route exact path="/home/tickers/:symbol" element={<ViewTickerData />}/>
        <Route exact path="/home/stock-charts" element={<StockChart />}/>
        <Route exact path="/home/ticker-news/:name" element={<SingleTickerNews />}/>
        <Route exact path="/home/ticker-details" element={<TickerDetails />}/>
      </Routes>
      </div>
      
      <Footer/>

      

      



    </div>
  );
}


export default App;
