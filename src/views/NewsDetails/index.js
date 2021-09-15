import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import "./style.css"
import axios from "axios";
import {useParams} from "react-router-dom";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import NotFound from "../NotFound";


const NewsDetails = () => {
    const [oneNews, setOneNews] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const params = useParams()
    useEffect(() => {
        axios(`https://613ae97d110e000017a453d0.mockapi.io/news-site/${params.id}`)
            .then(({data}) => {
                setOneNews(data)
                setIsLoading(false)
            })
            .catch(() => setNotFound(true))
            .finally(()=> setIsLoading(false))
    }, [params.id])
    if (isLoading) return <Spinner />
    if(notFound) return <NotFound />
    return (
        <Layout>
            <div className="row">
                <div className="col-md-8 offset-2">
                    <div className="news-box pb-5">
                        <img src={oneNews.image} alt={oneNews.title}/>
                        <div className="news-info-box">
                            <p>{oneNews.tagline}</p>
                            <h3>{oneNews.title}</h3>
                            <span>{oneNews.author}</span>
                            <p>{oneNews.description}</p>
                        </div>
                        <div className="feedback pb-3">
                            <p>Комментарии</p>
                                    <p>Алина <span>12.03.2021</span>
                                        <p>Опять?!</p>
                                    </p>
                            <textarea style={{width: "100%"}} className="pt-3 pl-3 ps-3 pe-3" placeholder="Комментарий..." id="" cols="8" rows="6" />
                            <div className="d-flex justify-content-end">
                                <Button  variant="primary" text="Отправить"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NewsDetails;