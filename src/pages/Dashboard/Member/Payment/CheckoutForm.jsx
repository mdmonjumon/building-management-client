import React, { useEffect, useMemo, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../../../../components/Shared/Button";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CheckoutForm = ({ couponId, paymentInfo }) => {
  const axiosSecure = useAxiosSecure();
  console.log(couponId, paymentInfo);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [error, setError] = useState();
  const [paymentSecret, setPaymentSecret] = useState(null);

  const intentData = useMemo(() => {
    return { couponId, apartmentId: paymentInfo?.apartmentId };
  }, [couponId, paymentInfo]);

  useEffect(() => {
    axiosSecure
      .post("/payment-intent", intentData)
      .then((res) => setPaymentSecret(res?.data?.clientSecret));
  }, [intentData, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      return;
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm card payment
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(paymentSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (paymentError) {
      setError(paymentError?.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        setError("");
        // handlePurchase(paymentIntent?.id)
        const payment = {
          name: user?.displayName,
          email: user?.email,
          transactionId: paymentIntent?.id,
        };
        await axiosSecure.post("/payments", payment);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-rose-500 text-sm mt-2">{error && error}</p>
        <div className="my-4">
          <Button disabled={!stripe} label={"Pay"}></Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
