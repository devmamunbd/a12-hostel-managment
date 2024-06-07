/* eslint-disable react/prop-types */
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckOutForm from "./CheckOutForm"


const stripePromise = loadStripe(import.meta.env.VITE_PK)

const Payment = () => {
  // console.log(price)
  return (
    <div>
        <Elements stripe={stripePromise}>
            <CheckOutForm ></CheckOutForm>
        </Elements>
    </div>
  )
}

export default Payment