import axios from "axios";

export const uploadImage = async (imageData) => {
  const imageFormData = new FormData();
  imageFormData.append("image", imageData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`,
    imageFormData
  );
  return data?.data?.url;
};
