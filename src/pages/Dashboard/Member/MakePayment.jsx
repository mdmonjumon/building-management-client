import Select from "react-select";
import makeAnimated from "react-select/animated";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import Button from "../../../components/Shared/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
const animatedComponents = makeAnimated();

const MakePayment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: paymentInfo, isLoading } = useQuery({
    queryKey: ["paymentInfo", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/agreement/${user?.email}`);
      return data;
    },
  });

  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 1;
  const nextYear = currentYear + 1;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const options = [];
  for (let year = nextYear; year >= lastYear; year--) {
    for (let i = 0; i < 12; i++) {
      options.push({
        value: `${i + 1}-${year}`,
        label: `${months[i]} ${year}`,
      });
    }
  }

  const currentOption = options.find(
    (option) =>
      option.value == `${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  );

  const [select, setSelect] = useState(currentOption);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* email */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Member Email</legend>
          <input
            className="input focus:outline-0 bg-gray-300 text-gray-700 text-lg w-full"
            required
            defaultValue={user?.email}
            readOnly
          />
        </fieldset>

        {/* Floor */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Floor</legend>
          <input
            className="input focus:outline-0 bg-gray-300 text-gray-700 text-lg w-full"
            defaultValue={paymentInfo?.floorNo}
            readOnly
          />
        </fieldset>

        {/* Block Name */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Block Name</legend>
          <input
            className="input focus:outline-0 bg-gray-300 text-gray-700 text-lg w-full"
            defaultValue={paymentInfo?.blockName}
            readOnly
          />
        </fieldset>

        {/* Apartment No */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Apartment No</legend>
          <input
            className="input focus:outline-0 bg-gray-300 text-gray-700 text-lg w-full"
            defaultValue={paymentInfo?.apartmentNo}
            readOnly
          />
        </fieldset>

        {/* Rent */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Rent</legend>
          <input
            className="input focus:outline-0 bg-gray-300 text-gray-700 text-lg w-full"
            defaultValue={`$ ${paymentInfo?.rent}`}
            readOnly
          />
        </fieldset>

        {/* Month */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Month</legend>
          <Select
            className="text-lg"
            components={animatedComponents}
            // defaultValue={options[new Date().getMonth()]}
            value={select}
            onChange={(e) => setSelect(e)}
            options={options}
          />
        </fieldset>
      </div>
      <Link
        to="/dashboard/payment"
        state={{ paymentData: { ...paymentInfo, date: select?.label } }}
      >
        <Button label={"Pay Rent"}></Button>
      </Link>
    </div>
  );
};

export default MakePayment;
