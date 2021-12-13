import React, { useState, useEffect } from 'react'
import TickerService from '../services/TickerService';
import Header from './Header';
import { Link } from 'react-router-dom';
import {Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap'



const AllTickersComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllTickers();
    }, [])


    const getAllTickers = () => {
        TickerService.getAllTickers().then(
            (response) => {
                setData(response.data);
                console.log(response.data);
            })
    }



    return (
        <div className='mt-5 '>
            <Header />
            <table>

                <thead>
                    <th>ETFs</th>
                </thead>

                <tbody>
                    {data.map((item) => {
                        return <>
                            <tr key={item.id}>
                                <td>{item.ticker} | {item.name}</td>
                                <td>

                                    <Link to={`/home/tickers/${item.ticker}`}>
                                        View Data
                                    </Link>
                                </td>
                            </tr>


                        </>

                    })}
                </tbody>



            </table>

        </div>
    )
}

export default AllTickersComponent
