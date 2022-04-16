import React from 'react';
import './Product.css'

const Product = ({product}) => {

    const {name, img, price, ratings} = product;
    return (
        <div className='single_product_div'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
                <div className='d-flex justify-content-between'>
                    <p>Ratting: {ratings}</p>
                    <button>Buy Now</button>
                </div>
        </div>
    );
};

export default Product;