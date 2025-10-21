import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ApartmentCard = ({ apartment }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { apartmentImage, apartmentNo, blockName, floorNo, rent, _id } =
    apartment;

  const handleAgreement = async () => {
    if (!user) {
      return navigate("/login");
    }
    const agreementInfo = {
      floorNo,
      blockName,
      apartmentNo,
      rent,
      apartmentId: _id
    };
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
            <Button onclick={handleAgreement} label="Agreement"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
