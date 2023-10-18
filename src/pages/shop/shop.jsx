import React from 'react';
import { PRODUCTS } from '../../product'
import { Product } from './product';
import './shop.css';
import Logo from '../../assets/delivery2.jpeg';
export const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <img src={Logo}/>
            </div>
            <div className='products'>
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}