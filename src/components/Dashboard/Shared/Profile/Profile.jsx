import React from "react";
import useAuth from "../../../../hooks/useAuth";

const Profile = ({ info = {} }) => {
  const { user } = useAuth();

  const { floorNo, blockName, apartmentNo, rent, status, date } = info;

  return (
    <div>
      <div className="h-64 bg-gradient-to-r from-indigo-500/60 via-purple-500/60 to-pink-500/60 rounded-r-2xl"></div>

      <div className="flex flex-col items-center justify-center">
        <img
          className="w-40 h-40 size-full object-contain rounded-full -m-12 bg-white"
          referrerPolicy="no-referrer"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <div className="mt-15">
          <p className="text-lg font-semibold text-center">
            Name: {user?.displayName}
          </p>
          <p className="text-gray-700 text-center">Email: {user?.email}</p>
        </div>
      </div>

      <div className="space-y-2 p-10">
        <h3 className="text-lg font-semibold">Agreement Info:</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* floor */}
          <div>
            <p className="font-medium">Floor No</p>
            <p className="font-medium py-1.5 pl-2 bg-gray-300 rounded text-lg text-gray-700">
              {floorNo || "none"}
            </p>
          </div>

          {/* block */}
          <div>
            <p className="font-medium">Block Name</p>
            <p className="font-medium py-1.5 pl-2 bg-gray-300 rounded text-lg text-gray-700">
              {blockName || "none"}
            </p>
          </div>

          {/* Apartment No */}
          <div>
            <p className="font-medium">Apartment No</p>
            <p className="font-medium py-1.5 pl-2 bg-gray-300 rounded text-lg text-gray-700">
              {apartmentNo || "none"}
            </p>
          </div>

          {/* rent */}
          <div>
            <p className="font-medium">Rent</p>
            <p className="font-medium py-1.5 pl-2 bg-gray-300 rounded text-lg text-gray-700">
              {rent || "none"}
            </p>
          </div>

          {/* status */}
          <div>
            <p className="font-medium">Status</p>
            <p className="font-medium py-1.5 pl-2 bg-gray-300 rounded text-lg text-gray-700">
              {status || "none"}
            </p>
          </div>

          {/* date */}
          <div>
            <p className="font-medium">Accept Date</p>
            <p className="font-medium py-1.5 pl-2 bg-gray-300 rounded text-lg text-gray-700">
              {date || "none"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
