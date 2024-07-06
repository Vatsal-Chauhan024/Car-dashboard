import React, { useMemo, useRef, useState } from "react";
import HeadingComponent from "../components/HeadingComponent";
import Label from "../components/Label";
import HrComponent from "../components/HrComponent";
import InputField from "../components/InputField";
import Button from "../components/Button";
import formSubmit from "../utilities/formSubmit";
import { inputChange } from "../utilities/inputChange";
import InputData from "../assets/datas/InputData";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";

const AddProduct = () => {
  const [inputFields, setInputFields] = useState({
    CarName: "",
    CompanyName: "",
    FuelCapacity: "",
    CarCapacity: "",
    CarRent: "",
    CarImage: null,
    CarDesc: "",
  });

  const navigate = useNavigate();
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      autofocus: true,
      tabIndex: 1,
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      defaultActionOnPaste: "insert_clear_html",
      placeholder: "Write something ...",
      beautyHTML: true,
      toolbarButtonSize: "large",
      statusbar: false,
      theme: "default",
      addNewLine: false,
      buttons: [
        "|",
        "bold",
        "italic",
        "|",
        "ul",
        "ol",
        "|",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "link",
        "|",
        "left",
        "center",
        "right",
        "justify",
        "|",
        "hr",
        "fullsize",
      ],
    }),
    []
  );

  const handleChange = (e) => {
    inputChange(e, inputFields, setInputFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmit(inputFields, setInputFields, navigate);
  };

  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <HeadingComponent headingProps="Add Product" />
        <HrComponent />
        <div>
          <form
            action=""
            encType="multipart/form-data"
            className="flex flex-col gap-8 mb-4"
            onSubmit={handleSubmit}
          >
            {InputData.map((element, key) => (
              <div className="flex flex-col gap-2" key={key}>
                <Label>{element.labelText}</Label>
                {element.type === "text" ? (
                  <InputField
                    type={element.type}
                    placeholder={element.placeholder}
                    value={inputFields[element.name]}
                    name={element.name}
                    onChange={handleChange}
                  />
                ) : element.type === "address" ? (
                  <JoditEditor
                    ref={editor}
                    name={element.name}
                    value={inputFields[element.name]}
                    config={config}
                    tabIndex={1}
                    onChange={(content) =>
                      setInputFields({
                        ...inputFields,
                        CarDesc: content,
                      })
                    }
                  />
                ) : (
                  <div className="relative h-10">
                    <input
                      type="text"
                      value={inputFields[element.name]?.name || ""}
                      className={`h-full w-full flex items-center px-5 bg-bg-secondary/50 border border-solid border-stroke-primary rounded-10 outline-none focus:bg-bg-primary`}
                      readOnly
                      placeholder="Select Your Car Image"
                    />
                    <input
                      type="file"
                      name={element.name}
                      onChange={handleChange}
                      className="absolute top-0 left-0 w-full h-full opacity-0"
                      accept=".jpg, .png, .jpeg, .webp"
                    />
                  </div>
                )}
              </div>
            ))}
            <Button type="submit">submit</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
