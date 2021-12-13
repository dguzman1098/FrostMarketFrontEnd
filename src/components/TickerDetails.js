import React, { useEffect, useState } from 'react'
import TickerDetailsService from '../services/TickerDetailsService';
import Header from './Header';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

const TickerDetails = () => {
    const [jsonData, setjsonData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchTickerDetails();
    }, [])

    const fetchTickerDetails = () => {

        TickerDetailsService.getTickerDetails(query).then((response) => {
            console.log(response.data);
            setjsonData(response.data);
        })
    }

    return (
        <div>
            <Header />
            <h1>Stock News</h1>

            <div>
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
                    <button onClick={fetchTickerDetails} type="submit">Search</button>
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
                        <CardTitle tag="h5">
                            <p>{jsonData.name}</p>
                            <a href={jsonData.name}>
                                <img src={jsonData.name} width={"75%"}></img>
                            </a>

                        </CardTitle>
                        <CardSubtitle
                            className="mb-3"
                            tag="h6"
                            style={{ borderTop: '1px solid black', color: 'black' }}

                        >
                            <br />
                            {jsonData.country}
                            <br />

                        </CardSubtitle>
                        <CardText style={{ backgroundColor: 'SKYBLUE', color: 'black', padding: '10px' }}>
                            {jsonData.name}
                        </CardText>
                        <Button style={{ backgroundColor: 'white' }}>
                            <a href={jsonData.name}>
                                Click To Read More
                            </a>
                        </Button>
                    </CardBody>
                </Card>


            </div>
        </div>
    )
}

export default TickerDetails

const cardStyle = {
    color: "white",
    backgroundColor: "Orange",
    padding: "10px",
    fontFamily: "Arial",
    margin: "10px"

};