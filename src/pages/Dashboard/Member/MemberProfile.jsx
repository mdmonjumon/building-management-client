import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Profile from "../../../components/Dashboard/Shared/Profile/Profile";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const MemberProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: agreementInfo, isLoading } = useQuery({
    queryKey: ["agreementInfo", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/agreement/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <Profile info={agreementInfo}></Profile>
    </div>
  );
};

export default MemberProfile;
