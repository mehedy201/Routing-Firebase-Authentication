import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    const navigate = useNavigate();
    const seeAllButton = () => {
        navigate('/shop')
    }



    return (
        <div className='container'>
            <div className='products_all'>
            {
                products.slice(0,3).map(product => <Product key={product.id} product={product}></Product>)
            }
            </div>
            <button style={{width: '250px', margin: '20px' }} onClick={seeAllButton} className='btn btn-warning' >See All</button>
        </div>
    );
};

export default Products;