import React, { useEffect, useState } from 'react';
import Product from '../../Sheard/Products/Product/Product';
import './Shop.css'

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    console.log(products);

    return (
        <div>
            <div className='container shop_product mx-auto'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Shop;