import React, { useEffect, useState } from 'react';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])






    return (
        <div>
            <p>product length {products.length}</p>
        </div>
    );
};

export default Products;