import axios from "axios";

const API_URL = "http://localhost:8080/FrostMarket";

class TickerNewsService {

    getAllTickersNews(query){
        return axios.get(API_URL + "/ticker-news/" + query)
    }

    getDefaultHomeNews(){
        return axios.get(API_URL + "/ticker-news/AAPL")
    }

}

export default new TickerNewsService();