import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const AgreementTable = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: agreements = [], isLoading } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure("/agreements");
      return res?.data;
    },
  });

  console.log(agreements);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Floor No</th>
              <th>Block Name</th>
              <th>Rent</th>
              <th>Agreement Request date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {agreements.map((agreement) => (
              <tr key={agreement?._id} className="hover:bg-base-300">
                <th>{agreement?.userName}</th>
                <td>{agreement?.userEmail}</td>
                <td>{agreement?.floorNo}</td>
                <td>{agreement?.blockName}</td>
                <td>{agreement?.rent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgreementTable;
