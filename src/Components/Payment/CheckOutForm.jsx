/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic"
import { useLoaderData, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const packItem = useLoaderData()
    const {price} = packItem
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const {user} = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const axiosPublic = useAxiosPublic()
   


    useEffect(()=> {
      if (price > 0) {
        axiosPublic.post('/createPaymentIntent', {price: price})
        .then(res => {
            // console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
      }
    },[axiosPublic, price])


    const handleSubmit = async event => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

    const card = elements.getElement(CardElement)
    if (card == null) {
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if (error) {
        // console.log('payment error', error)
        setError(error.message)
    } else {
        console.log('payment success', paymentMethod)
        setError('')
    }


    //confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if (confirmError) {
      console.log(confirmError)
    } else {
      console.log('paymentIntent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id)
        setTransactionId(paymentIntent.id)

        //now save the payment info in databse
        const payment = {
          name: user?.displayName,
          email: user?.email,
          price: price,
          transactionId: paymentIntent.id,
          date: new Date(),
          status: 'pending'
        }

        axiosPublic.post('/payments', payment)
        .then(res =>{
          console.log('payment save',res.data)
          if (res?.data?.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Payment History has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            // setTransactionId('')
          }
        })


      } else{
        setTransactionId(' ')
      }
    }


  }
        
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <CardElement
            options={{
                style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
            }}
            >
            </CardElement>
            <button
            className="w-full cursor-pointer bg-green-500 mt-5 py-2
             text-white font-semibold" type="submit" disabled={!stripe || !clientSecret} >
             Payment
            </button>
            <p className="text-red-500">{error}</p>
            <p className="text-green-500">{transactionId}</p>
            {/* <p>{price}</p> */}
        </form>
    </div>
  )
}

export default CheckOutForm