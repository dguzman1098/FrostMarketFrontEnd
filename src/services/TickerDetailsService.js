import axios from "axios";

const API_URL = "http://localhost:8080/FrostMarket";

class TickerDetailsService {

    
    getSingleTickerDetails(query){
        return axios.get(API_URL + "/ticker-details/" + query)
    }

    getDefaultTickerDetails(){
        return axios.get(API_URL + "/ticker-details/AAPL")
    }

}

export default new TickerDetailsService();