import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ApartmentCard = ({ apartment }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);

  const { apartmentImage, apartmentNo, blockName, floorNo, rent, _id } =
    apartment;

  const handleAgreement = async () => {
    setIsLoading(true);
    if (!user && !user?.email) {
      return navigate("/login");
    }
    const agreementInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      floorNo,
      blockName,
      apartmentNo,
      rent,
    };

    try {
      const { data } = await axiosSecure.post("/agreement", agreementInfo);
      if (data.insertedId) {
        toast.success(`Agreement success! Apartment No: ${apartmentNo}`);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img className="" src={apartmentImage} alt="house" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blockName}</h2>
          <p>
            <span className="text-lg font-semibold">Apartment No: </span>
            {apartmentNo}
          </p>
          <p>
            <span className="text-lg font-semibold">Floor No: </span>
            {floorNo}
          </p>
          <p>
            <span className="text-lg font-semibold">Rent: </span>${rent}
          </p>

          <div className="card-actions justify-end">
            <Button
              isLoading={isLoading}
              onclick={handleAgreement}
              label="Agreement"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
