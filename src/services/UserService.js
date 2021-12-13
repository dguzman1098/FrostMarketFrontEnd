import React from 'react'
import axios from 'react';


const API_URL = "http://localhost:8080/FrostMarket"

class UserService {

    createUser(user){
        
        return axios.post(API_URL + "/users", user)
        
        
    }

    
}

export default new UserService();
