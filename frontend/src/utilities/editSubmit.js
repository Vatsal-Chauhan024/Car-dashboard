import axios from "axios";
import { toast } from "react-toastify";

const editSubmit = (inputFields, id, navigate) => {
  axios
    .patch(`http://localhost:8000/cars/update-car/${id}`, inputFields, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      const apiResponse = response.data;

      if (apiResponse.status === 200) {
        toast.success(apiResponse.message, {
          theme: "colored",
          autoClose: 2000,
          hideProgressBar: true,
        });
        navigate("/");
      } else {
        toast.error(apiResponse.message, {
          theme: "colored",
          autoClose: 2000,
          hideProgressBar: true,
        });
      }
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form", {
        theme: "colored",
        autoClose: 1000,
        hideProgressBar: true,
      });
    });
};

export default editSubmit;
