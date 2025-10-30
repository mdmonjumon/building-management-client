import { useState } from "react";
import Button from "../../../components/Shared/Button";
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

const PaymentPage = () => {
  const axiosSecure = useAxiosSecure();
  const [discount, setDiscount] = useState(0);
  const [couponId, setCouponId] = useState('');
  const {
    state: { paymentData },
  } = useLocation();

  console.log(paymentData);
  const [totalRent, setTotalRent] = useState(paymentData?.rent);

  const handleVerifyCoupon = async (e) => {
    e.preventDefault();
    const coupon = e.target.coupon.value;
    try {
      // fetch coupon data
      const { data } = await axiosSecure(`coupon/${coupon}`);
      setCouponId(data?.coupon_id);
      if (!data) {
        return toast.error("Invalid coupon. Try again with valid coupon");
      }
      if (data?.discount_type.toLowerCase() === "fixed_amount") {
        setTotalRent(paymentData?.rent - data?.value);
        setDiscount(data?.value);
      }
      if (data?.discount_type.toLowerCase() === "percentage") {
        setDiscount((paymentData?.rent * data?.value) / 100);
        setTotalRent(
          paymentData?.rent - (paymentData?.rent * data?.value) / 100
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleVerifyCoupon}>
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend text-lg">Coupon Code</legend>
          <input
            type="text"
            className="input focus:outline-0"
            placeholder="Type your coupon here"
            name="coupon"
            required
          />
        </fieldset>
        <Button label={"Apply Coupon"}></Button>
      </form>

      <div className="mt-10 py-5 px-5 bg-slate-100 rounded mb-3">
        <div className="border-b border-gray-400 flex items-center justify-between">
          <p className="text-lg">Rent:</p>
          <p className="text-lg font-medium">${paymentData?.rent}</p>
        </div>
        <div className="border-b border-gray-400 flex items-center justify-between">
          <p className="text-lg ">Discount:</p>
          <p className="text-lg font-medium">${discount}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg">Total:</p>
          <p className="text-xl font-semibold">${totalRent}</p>
        </div>
      </div>

      <div className="mt-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            couponId={couponId}
            paymentInfo={paymentData}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
