import React from 'react'
import TradingViewWidget, {Themes} from 'react-tradingview-widget';
import Header from './Header'

const StockChart = () => {
    return (
        <div>
            <Header/>

            <div className='mt-5'>
                <h1>Stock chart</h1>
            <TradingViewWidget symbol="NASDAQ:AAPL" theme={Themes.DARK}/>

            </div>
        </div>
    )
}

export default StockChart;
