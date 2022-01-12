import axios from "axios";

const API_URL = "http://localhost:8080/FrostMarket";

class TickerDetailsService {

    
    getTickerDetails(){
        return axios.get(API_URL + "/ticker-details/AAPL")
    }

}

export default new TickerDetailsService();