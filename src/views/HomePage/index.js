import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import Spinner from "../../components/Spinner";
import NotFound from "../NotFound";

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
            .finally(()=> setIsLoading(false))
        }, [])
    if (isLoading) return <Spinner />
    if (notFound) return <NotFound />
    return (
        <Layout>
            <OwlCarousel className='owl-theme' autoplay={1000} loop={true} center dots={false} items={2} stagePadding={50} margin={5}>
                {
                    news.map(item =>
                    <div>
                        <img width={100} height="570px" src={item.image} alt={item.title} />
                        <p className="text-center mt-2">{item.tagline}</p>
                    </div>)
                }
            </OwlCarousel>
        </Layout>
    );
};

export default HomePage;