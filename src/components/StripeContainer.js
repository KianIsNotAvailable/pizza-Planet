import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51O38ZfIXkKrLt1hb4as9pthmv3QnkpF3jM30uqcUvCgedXZ2TwwHe8chKsNS6sXKSFbae5g3bJuGSieKRTbLm2oE00rsUtBJ9N"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


