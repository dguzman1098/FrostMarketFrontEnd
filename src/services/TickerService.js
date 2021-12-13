import axios from "axios";

const API_URL = "http://localhost:8080/FrostMarket";

class TickerService {

    getAllTickers(){
        return axios.get(API_URL + "/tickers")
    }

    getTickerBySymbol(stockTicker){
        return axios.get(API_URL + "/tickers/ticker-symbol/?ticker=" + stockTicker)
    }


}

export default new TickerService();