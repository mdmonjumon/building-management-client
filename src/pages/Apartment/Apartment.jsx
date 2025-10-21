import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ApartmentCard from "../../components/Shared/ApartmentCard";
import Container from "../../components/Shared/Container";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const Apartment = () => {
  const axiosPublic = useAxiosPublic();
  

  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["allApartments"],
    queryFn: async () => {
      const { data } = await axiosPublic("/apartments");
      return data;
    }
  });

  isLoading && <LoadingSpinner></LoadingSpinner>

  return (
    <Container>
      <div className="my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment._id}
            apartment={apartment}
          ></ApartmentCard>
        ))}
      </div>
    </Container>
  );
};

export default Apartment;
