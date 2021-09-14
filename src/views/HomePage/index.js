import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios";
import Spinner from "../../components/Spinner";
import NotFound from "../NotFound";
import "./style.css"
import {Link} from "react-router-dom";

const HomePage = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    useEffect(() => {
        axios(`https://613ae97d110e000017a453d0.mockapi.io/news-site`)
            .then(({data}) => {
                setNews(data)
                setIsLoading(false)
            })
            .catch(() => setNotFound(true))
            // .finally(()=> setIsLoading(false))
        }, [])
    if (isLoading) return <Spinner />
    if (notFound) return <NotFound />
    return (
        <Layout>
            <Carousel fade
                      className="my-md-3"
            >
                {
                    news.map(item =>
                        <Carousel.Item>
                            <Link to={`/news-details/${item.id}`}>
                                <img
                                    className="d-block"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <Carousel.Caption  style={
                                    {
                                        color: "#fff",
                                        backgroundColor: "#808080b3"
                                    }
                                }>
                                    <h3>{item.title}</h3>
                                    <p>{item.tagline}</p>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    )
                }


            </Carousel>
        </Layout>
    );
};

export default HomePage;