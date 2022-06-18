import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const fetchContent = async () => {
  try {
    const response = await axios.get(
      "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
    );
    return response.data.Details;
  } catch (e) {
    toast.error("Something Went Wrong ! Please Try Again.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  <ToastContainer />;
};
