import React, { useState, useEffect } from 'react'
import TickerNewsService from '../services/TickerNewsService';
import { Link, useParams, useNavigate } from 'react-router-dom'
import Header from './Header'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

const AllTickersComponent = () => {
    const [jsonData, setJsonData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        // getTickerNews();
        getHomePageNews();
    }, [])


    const getHomePageNews = () => {
        TickerNewsService.getDefaultHomeNews().then((response) => {
            setJsonData(response.data.results);
            console.log(response.data.results);

        })
    }


    const getTickerNews = () => {
        TickerNewsService.getAllTickersNews(query).then((response) => {
            setJsonData(response.data);
            console.log(response.data);            
        })
    }


    return (
        <div className='col-lg-12'>
            <header >
                <Header />
            </header>


            <h1>Stock News</h1>

            <div>
                <form action={`/home/ticker-news/${query}`} method="get" className="mt-5">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search Stocks News</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search News"
                        onChange={(e) => setQuery(e.target.value) }

                    />
                    <button onClick={getTickerNews} type="submit">Search</button>
                </form>
            </div>


            <div style={{
                display: 'flex', flex: "25%",
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: "10px",
                justifyContent: "center"

            }}>
                {jsonData.map((data) => {
                    return <>
                        <Card className=' col-sm-3 mt-5 mb-5' style={cardStyle}
                        >
                            <CardBody >
                                <CardTitle tag="h5">
                                    <p>{data.title}</p>
                                    <a href={data.article_url}>
                                        <img src={data.image_url} width={"75%"}></img>
                                    </a>

                                </CardTitle>
                                <CardSubtitle
                                    className="mb-3"
                                    tag="h6"
                                    style={{ borderTop: '1px solid black', color: 'black' }}

                                >
                                    AUTHOR
                                    <br />
                                    {data.author}
                                    <br />

                                </CardSubtitle>
                                <CardText style={{ backgroundColor: 'SKYBLUE', color: 'black', padding: '10px' }}>
                                    {data.description}
                                </CardText>
                                <Button style={{ backgroundColor: 'white' }}>
                                    <a href={data.article_url}>
                                        Click To Read More
                                    </a>
                                </Button>
                            </CardBody>
                        </Card>
                    </>
                })}
            </div>


            {/* {Jsondata.filter((data) => {
                if (query === "") {
                    //if query is empty
                    return "";
                } else if (data.tickers.toLowerCase().includes(query)) {
                    console.log("match found: " + data.title);
                    console.log(data)
                    //returns filtered array
                    return data;
                }

            }).map((data) => {
                return <>
                    <div className="box">
                        <p><b>News Title: {data.title}</b></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </>
            })} */}
        </div>
    )
}

export default AllTickersComponent;


//Card Style Code
const cardStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    margin: "10px"

};


