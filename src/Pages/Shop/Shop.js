import React, { useEffect, useState } from 'react';
import Product from '../../Sheard/Products/Product/Product';
import './Shop.css'

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <div className='container shop_product mx-auto'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Shop;