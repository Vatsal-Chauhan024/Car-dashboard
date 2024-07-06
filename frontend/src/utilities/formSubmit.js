import axios from "axios";
import { toast } from "react-toastify";

const formSubmit = (inputFields, setInputFields, navigate) => {
  axios
    .post("http://localhost:8000/cars/add-car", inputFields, {
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
    })
    .finally(() => {
      setInputFields({
        CarName: "",
        CompanyName: "",
        FuelCapacity: "",
        CarCapacity: "",
        CarRent: "",
        CarImage: null,
      });
    });
};

export default formSubmit;
