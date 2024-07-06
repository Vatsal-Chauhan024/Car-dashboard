import React, { useEffect, useState } from "react";
import HeadingComponent from "../components/HeadingComponent";
import HrComponent from "../components/HrComponent";
import Label from "../components/Label";
import InputField from "../components/InputField";
import { inputChange } from "../utilities/inputChange";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Button from "../components/Button";
import {Navigate, useNavigate} from "react-router-dom"
import InputArray from "../assets/datas/LoginInput";
import LoginFunction from "../utilities/login";

const Login = () => {

  const [inputField, setInputField] = useState({
    UserName: "",
    Password: "",
  });
  const [isPassword, setIsPassword] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    if(sessionStorage.getItem("userLoggedIn")){
     navigate(-1)
     window.location.reload();
    }
  }, [])


  const handleChange = (e) => {
    inputChange(e, inputField, setInputField);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    LoginFunction(inputField, navigate)
  }

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center p-5 sm:p-0">
        <div className="max-w-lg w-full shadow-xl h-96 rounded-10 bg-bg-secondary p-5 flex flex-col gap-5">
          <HeadingComponent headingProps="Login" />

          <HrComponent />

          <div>
            <form
              action=""
              className="flex flex-col justify-center gap-5"
              onSubmit={handleSubmit}
            >
              {InputArray.map((element, key) => (
                <div key={key} className="flex flex-col justify-start gap-1">
                  <Label>{element.label}</Label>

                  <div className="relative w-full">
                    <InputField
                      type={
                        element.name === "Password" && !isPassword
                          ? "text"
                          : element.type
                      }
                      placeholder={element.placeholder}
                      value={inputField[element.name]}
                      name={element.name}
                      onChange={handleChange}
                    />

                    {element.name === "Password" && (
                      <span
                        className="absolute top-3 right-4 *:text-xl *:cursor-pointer"
                        onClick={() => setIsPassword(!isPassword)}
                      >
                        {element.type === "password" && isPassword ? (
                          <VscEye />
                        ) : (
                          <VscEyeClosed />
                        )}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <Button type="submit">Login</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
