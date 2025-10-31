import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: adminStats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="rounded-t-2xl">
      <div className="h-64 bg-gradient-to-r from-indigo-500/60 via-purple-500/60 to-pink-500/60 rounded-t-2xl"></div>

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
          <p className="text-gray-700 text-center text-lg">
            Email: {user?.email}
          </p>
        </div>
      </div>

      <div className="mt-10 text-xl font-bold grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center p-[var(--dashboard-padding)]">
        <div className="h-28 w-72 text-center content-center bg-white rounded-xl shadow-2xl">
          <span>Total Rooms: </span>
          <span>{adminStats?.totalRooms}</span>
        </div>
        <div className="h-28 w-72 text-center content-center bg-white rounded-xl shadow-2xl">
          <span>Available Rooms: </span>
          <span>{adminStats?.availableRoomsPct}%</span>
        </div>
        <div className="h-28 w-72 text-center content-center bg-white rounded-xl shadow-2xl">
          <span>Unavailable Rooms: </span>
          <span>{adminStats?.unavailableRoomsPct}%</span>
        </div>
        <div className="h-28 w-72 text-center content-center bg-white rounded-xl shadow-2xl">
          <span>Total Members: </span> <span>{adminStats?.totalMembers}</span>
        </div>
        <div className="h-28 w-72 text-center content-center bg-white rounded-xl shadow-2xl">
          <span>Total Users: </span> <span>{adminStats?.totalUsers}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
