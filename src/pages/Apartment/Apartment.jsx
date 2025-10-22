import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ApartmentCard from "../../components/Shared/ApartmentCard";
import Container from "../../components/Shared/Container";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import toast from "react-hot-toast";
import Button from "../../components/Shared/Button";

const Apartment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const axiosPublic = useAxiosPublic();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allApartments"],
    queryFn: async () => {
      const {
        data: { result, totalApartments },
      } = await axiosPublic(
        `/apartments?pages=${currentPage}&min=${min}&max=${max}`
      );
      return { result, totalApartments };
    },
  });

  const apartments = data?.result || [];
  const totalApartments = data?.totalApartments || 0;
  const totalPages = Math.ceil(totalApartments / 6);
  const pages = [...Array(totalPages).keys()].map((i) => ++i);

  // refetch data only the page change
  useEffect(() => {
    refetch();
  }, [refetch, currentPage]);

  // search by rent
  const handleSearchByRent = (e) => {
    e.preventDefault();
    if (!min) return toast.error("Minimum value can not be empty or 0");
    if (!max) return toast.error("Maximum value can not be empty or 0");
    refetch();
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <Container>
      <div className="mt-28">
        <div className="flex flex-col md:flex-row justify-end items-center gap-5">
          <fieldset className="fieldset">
            {/* min */}
            <input
              type="number"
              className="input focus:outline-0"
              placeholder="Min"
              required
              name="min"
              onChange={(e) => setMin(parseInt(e.target.value))}
            />
          </fieldset>

          {/* max */}
          <fieldset className="fieldset">
            <input
              type="number"
              className="input focus:outline-0"
              placeholder="Max"
              required
              name="max"
              onChange={(e) => setMax(parseInt(e.target.value))}
            />
          </fieldset>
          <Button onclick={handleSearchByRent} label="Search by Rent"></Button>
        </div>
      </div>

      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {apartments.map((apartment) => (
          <ApartmentCard
            key={apartment._id}
            apartment={apartment}
          ></ApartmentCard>
        ))}
      </div>
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:gap-0 justify-center items-center">
        <button
          disabled={currentPage === 1}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          className="btn text-xl mr-0.5"
        >
          &lt; Previous
        </button>

        <div className="flex">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`btn text-2xl mr-0.5 ${
                currentPage === page ? "bg-amber-400" : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            currentPage !== pages.length && setCurrentPage(currentPage + 1)
          }
          className="btn text-xl mr-0.5"
          disabled={currentPage === pages.length}
        >
          Next &gt;
        </button>
      </div>
    </Container>
  );
};

export default Apartment;
