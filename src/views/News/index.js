import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {Link} from "react-router-dom";

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios(`https://613ae97d110e000017a453d0.mockapi.io/news-site`)
            .then(({data}) => setNews(data))
    }, [])
    return (
        <Layout>
            <div className="row my-5">
                {
                    news.map(item =>
                        <div key={item.id} className="col-md-3">
                            <Link to={`/news-details/${item.id}`} className="news-box">
                                <img src={item.image} alt={item.title}/>
                                <h5>{item.title}</h5>
                            </Link>
                        </div>
                    )
                }
            </div>
        </Layout>
    );
};

export default News;