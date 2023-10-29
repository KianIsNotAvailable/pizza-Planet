import './checkout.css';


import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../../components/PaymentForm';
import { Elements } from '@stripe/react-stripe-js'

import React, {useContext } from 'react';
import { PRODUCTS } from '../../product';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from '../cart/cart-item';
import { useNavigate } from "react-router-dom";


const PUBLIC_KEY = 'pk_test_51O38ZfIXkKrLt1hb4as9pthmv3QnkpF3jM30uqcUvCgedXZ2TwwHe8chKsNS6sXKSFbae5g3bJuGSieKRTbLm2oE00rsUtBJ9N'

const stripeTestPromise = loadStripe(PUBLIC_KEY)
export function Checkout(){
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <div>
            <div><h1 className='checkout'>Checkout</h1>
            </div>
            <div className='checkoutItems'>
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0){
                        return <CartItem data={product} />
                    }

                })}
            </div>
            <div>
                <h1 className='total'>Total: ${totalAmount}</h1>
            </div>
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
        </div>
    )
}

