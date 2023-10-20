import React, {useState} from "react";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            "-webkit-autofill": { color: '#fce883' },
            "::placeholder": { color: '#87bbfd' }
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee',
        }
    }
}



export default function PaymentForm(){
    const [succeeded, setSucceeded] = useState(false);
    const stripe = useStripe();
    const Elements = useElements();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: Elements.getElement(CardElement)
        })
    

    if(!error){
        try {
            const {id} = paymentMethod
            const response = await axios.post('http://localhost:4000/payment', {
                amount: 1000,
                id
            })

            if(response.data.succeeded){
                console.log('Successful Payment')
                setSucceeded(true)
            }
        } catch (error){
            console.log('Error', error)
        }
    } else {
        console.warn(error.message)
    }}
    return (
        <>
        {!succeeded ?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="payBtn">Pay</button>
        </form>
        :
        <div>
            <h2>Payment successful</h2>
        </div>
    
    }
        </>
    )
}