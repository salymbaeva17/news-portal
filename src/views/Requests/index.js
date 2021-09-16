import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {Table} from "react-bootstrap";
import axios from "axios";
import Spinner from "../../components/Spinner";
import NotFound from "../NotFound";

const Requests = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    useEffect(()=>{
        axios(`https://613ae97d110e000017a453d0.mockapi.io/callback`)
            .then(({data}) => {
                setUsers(data)
                setIsLoading(false)
            })
            .catch(() => setNotFound(true))
            .finally(()=> setIsLoading(false))
    }, [])
    if (isLoading) return <Spinner />
    if(notFound) return <NotFound />
    return (
        <Layout>
            <div className="row mt-md-4">
                <Table striped bordered hover variant="dark" >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(item =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </Layout>
    );
};

export default Requests;