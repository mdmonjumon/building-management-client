import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Container from "../Shared/Container";
import CouponCard from "./CouponCard";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Coupon = () => {
  const axiosPublic = useAxiosPublic();
  const { data: coupons, isLoading } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await axiosPublic("/coupons");
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <Container>
      <div className="mt-16 mb-5">
        <h2 className="text-center uppercase text-lg font-semibold my-10">Use Coupon to get discount</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
          {coupons.map((coupon) => (
            <CouponCard key={coupon?._id} coupon={coupon}></CouponCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Coupon;
