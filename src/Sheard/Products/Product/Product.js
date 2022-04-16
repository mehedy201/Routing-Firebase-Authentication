import React from 'react';
import './Product.css'

const Product = ({product}) => {

    const {name, img, price, ratings} = product;
    return (
        <div className='single_product_div'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Ratting: {ratings}</p>
                    <p><button className='btn btn-sm btn-warning'>Buy Now</button></p>
                </div>
        </div>
    );
};

export default Product;