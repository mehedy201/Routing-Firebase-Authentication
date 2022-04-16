import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


console.log(products)



    return (
        <div className='container mx-auto products_all'>
            {
                products.slice(0,3).map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;