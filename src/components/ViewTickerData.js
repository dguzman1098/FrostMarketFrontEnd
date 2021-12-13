import React, { useState, useEffect } from 'react'
import TickerService from '../services/TickerService';
import { useParams } from 'react-router-dom';
import Header from './Header';

const ViewTickerData = () => {
    const [jsonData, setJsonData] = useState([]);
    const { symbol } = useParams();


    useEffect(() => {
        getTickerByTickerSymbol();
    }, [])


    const getTickerByTickerSymbol = () => {
        TickerService.getTickerBySymbol(symbol).then((response) => {
            console.log(response.data)
            setJsonData(response.data);
        })
    }

    return (
        <div className='container mt-5'>
            <Header />
            <h2>
                Stock Data For {jsonData.name}
            </h2>
            <table className="table table-bordered table-striped mt-5">
                <thead style={{ backgroundColor: "skyblue" }}>
                    <th>id</th>
                    <th>ticker</th>
                    <th>currency_name</th>
                    <th>last_updated_utc</th>
                    <th>locale</th>
                    <th>market</th>
                    <th>primary_exchange</th>
                    <th>share_class_figi</th>
                </thead>

                <tbody style={{ backgroundColor: 'lightblue' }}>
                    <tr key={jsonData.id}>
                        <td>{jsonData.id}</td>
                        <td>{jsonData.ticker}</td>
                        <td>{jsonData.currency_name}</td>
                        <td>{jsonData.last_updated_utc}</td>
                        <td>{jsonData.locale}</td>
                        <td>{jsonData.market}</td>
                        <td>{jsonData.primary_exchange}</td>
                        <td>{jsonData.share_class_figi}</td>
                    </tr>


                </tbody>



            </table>
        </div>
    )
}


export default ViewTickerData
