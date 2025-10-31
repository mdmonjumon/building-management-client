import React, { useState } from "react";
import Button from "../../../components/Shared/Button";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);

  const handleMakeAnnouncement = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const announcementInfo = {
      title,
      description,
    };

    try {
      await axiosSecure.post("/announcement", announcementInfo);
      toast.success(`${title} announcement created`);
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-full flex justify-center items-center">
      <form onSubmit={handleMakeAnnouncement} className="flex-1">
        {/* title */}
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend text-lg">Title</legend>
          <input
            type="text"
            className="input focus:outline-0 w-full"
            placeholder="Title"
            name="title"
            required
          />
        </fieldset>

        {/* description */}
        <fieldset className="fieldset mb-2">
          <legend className="fieldset-legend text-lg">Description</legend>
          <textarea
            name="description"
            className="textarea w-full focus:outline-0"
            placeholder="Description"
          ></textarea>
        </fieldset>
        <Button isLoading={isLoading} label={"Continue"}></Button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
