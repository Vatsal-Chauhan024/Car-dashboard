import { toast } from "react-toastify";

const LoginFunction = (inputField, navigate) => {
  if (inputField.UserName === "Vatsal" && inputField.Password === "123") {
    navigate("/", { replace: true });
    toast.success("Logged In Successfully", {
      theme: "colored",
      autoClose: 2000,
      hideProgressBar: true,
    });
    sessionStorage.setItem("userLoggedIn", true);
  } else {
    toast.error("Credentials Did Not Match", {
      theme: "colored",
      autoClose: 2000,
      hideProgressBar: true,
    });
  }
};

export default LoginFunction;
