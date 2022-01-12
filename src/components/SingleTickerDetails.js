import React, { useState, useEffect } from 'react'
import TickerNewsService from '../services/TickerNewsService';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import Header from './Header'
import TickerDetailsService from '../services/TickerDetailsService';

const SingleTickerDetails = () => {
    const [jsonData, setJsonData] = useState([]);
    const [query, setQuery] = useState("");

    const { name } = useParams();

    useEffect(() => {
        getTickerDetails();
    }, [])



    const getTickerDetails = () => {
        TickerDetailsService.getSingleTickerDetails(name).then((response) => {
            setJsonData(response.data);
            console.log(response.data);
        })
    }
    return (
        <div >
            <Header />
            <h1>Stock Details</h1>

            <div >
                <form action={`/home/ticker-details/${query}`} method="get" className="mt-5">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search Stocks Information</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search Ticker"
                        onChange={(e) => setQuery(e.target.value)}

                    />
                    <button onClick={getTickerDetails} type="submit">Search</button>
                </form>
            </div>


            <div style={{
                display: 'flex', flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: "10px",
                justifyContent: "center"

            }}>
                <Card className=' col-sm-3 mt-5 mb-5' style={cardStyle}
                >
                    <CardBody >
                        <CardTitle tag="h5" className='text-center'>
                            <p>{jsonData.name}</p>
                        </CardTitle>
                        <CardSubtitle
                            className="mb-3 text-center"
                            tag="h6"
                            style={{ borderTop: '1px solid black', color: 'black' }}

                        >
                            <br />

                            <b>CEO:</b> {jsonData.ceo}
                            <br />

                        </CardSubtitle>
                        <CardText style={{ backgroundColor: 'SKYBLUE', color: 'black', padding: '10px' }}>
                            <ul style={{ listStyleType: 'none' }}>
                                <p>
                                    <li><b>Country:</b> {jsonData.country}</li>
                                </p>
                                <p>
                                    <li><b>Description:</b> {jsonData.description}</li>

                                </p>
                                <p>
                                    <li><b>Number of Employees</b>{jsonData.employees}</li>

                                </p>
                                <p>
                                    <li><b>Exchange: </b>{jsonData.exchange}</li>

                                </p>
                                <p>
                                    <li><b>First Listed On: </b>{jsonData.listdate}</li>

                                </p>
                                <p>
                                    <li><b>Market Cap: $</b>{jsonData.marketcap}</li>

                                </p>
                                <p>
                                    <li><b>Company Phone: </b>{jsonData.phone}</li>
                                </p>
                                <p>
                                    <li><b>Sector: </b>{jsonData.sector}</li>

                                </p>
                                <p>
                                    <li><b>Number of Employees:</b>{jsonData.employees}</li>

                                </p>
                                <p>
                                    <li><b>Company Website: </b><a href={jsonData.url}>{jsonData.url}</a></li>
                                </p>


                            </ul>

                        </CardText>

                    </CardBody>
                </Card>


            </div>
        </div>
    )
}

export default SingleTickerDetails

//Card Style Code
const cardStyle = {
    color: "white",
    backgroundColor: "slategray",
    padding: "10px",
    fontFamily: "Arial",
    margin: "10px",
    width: "100%",
    textAlign: 'left'

};
