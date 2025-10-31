import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: paymentsInfo = [], isLoading } = useQuery({
    queryKey: ["paymentsInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/payments/${user?.email}`);
      return res?.data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="p-[var(--dashboard-padding)] mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Month</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {paymentsInfo &&
              paymentsInfo.map((payment, index) => (
                <tr key={payment?.transactionId} className="hover:bg-base-300">
                  <th>{++index}</th>
                  <td>{payment?.name}</td>
                  <td>{payment?.email}</td>
                  <td>{payment?.date?.label}</td>
                  <td>{payment?.transactionId}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
