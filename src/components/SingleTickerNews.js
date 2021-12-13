import React, { useState, useEffect } from 'react'
import TickerNewsService from '../services/TickerNewsService';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import Header from './Header'

const SingleTickerNews = () => {
    const [jsonData, setJsonData] = useState([]);
    const [query, setQuery] = useState("");

    const { name } = useParams();

    useEffect(() => {
        getTickerNews();
    }, [])



    const getTickerNews = () => {
        TickerNewsService.getAllTickersNews(name).then((response) => {
            setJsonData(response.data.results);
            console.log(response.data.results);
        })
    }
    return (
        <div style={{
            display: 'flex', flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: "10px",
            justifyContent: "center"

        }}>
            <header className='mb-5'>
                <Header />
            </header>

            <div style={{flex: '100%'}} >
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
                            onChange={(e) => setQuery(e.target.value)}

                        />
                        <button onClick={getTickerNews} type="submit">Search</button>
                    </form>
                </div>
            </div>

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
    )
}

export default SingleTickerNews

//Card Style Code
const cardStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    margin: "10px"

};
