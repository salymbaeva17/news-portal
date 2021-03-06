import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../../components/Spinner";
import NotFound from "../NotFound";
import "./style.css"

const News = () => {
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
            .finally(() => setIsLoading(false))
    }, [])
    if (isLoading) return <Spinner />
    if (notFound) return <NotFound />
    return (
        <Layout>
            <div className="row my-5">
                {
                    news.map(item =>
                        <div key={item.id} className="col-md-4 col-sm-12 mb-4">
                            <Link to={`/news/${item.id}`} className="news-box">
                                <img src={item.image} style={{width: "100%"}} className="img" alt={item.title}/>
                                <h5 className="mt-2">{item.title}</h5>
                            </Link>
                        </div>
                    )
                }
            </div>
        </Layout>
    );
};

export default News;