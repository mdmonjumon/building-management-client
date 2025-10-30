import React from "react";

const CouponCard = ({ coupon }) => {
  console.log(coupon);
  const { coupon_id, description, name } = coupon;
  return (
    <div className="border py-5 px-5 space-y-2 rounded">
      <h3>Coupon Code : {coupon_id}</h3>
      <p>{description}</p>
      <p>{name}</p>
    </div>
  );
};

export default CouponCard;
