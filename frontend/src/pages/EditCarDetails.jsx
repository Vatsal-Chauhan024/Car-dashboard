import React, { useMemo, useRef, useState } from "react";
import HeadingComponent from "../components/HeadingComponent";
import Label from "../components/Label";
import HrComponent from "../components/HrComponent";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { inputChange } from "../utilities/inputChange";
import InputData from "../assets/datas/InputData";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import editSubmit from "../utilities/editSubmit";
import JoditEditor from "jodit-react";

const EditCarDetails = () => {
  const location = useLocation();
  const data = location.state;

  const [inputFields, setInputFields] = useState({
    CarName: data.CarName,
    CompanyName: data.CompanyName,
    FuelCapacity: data.FuelCapacity,
    CarCapacity: data.CarCapacity,
    CarRent: data.CarRent,
    CarImage: data.CarImage,
    CarDesc: data.CarDesc,
  });

  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: !edit,
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
    [edit]
  );

  const handleChange = (e) => {
    inputChange(e, inputFields, setInputFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit === false) {
      setEdit(true);
      toast.info("You Can Edit Now", {
        theme: "colored",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } else {
      editSubmit(inputFields, data._id, navigate);
      setEdit(false);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <HeadingComponent headingProps="Edit Product" />
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
                    readOnly={!edit}
                  />
                ) : element.type === "address" ? (
                  <JoditEditor
                    ref={editor}
                    name={element.name}
                    value={inputFields[element.name]}
                    config={config}
                    tabIndex={1}
                    onBlur={(content) =>
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
                      value={
                        inputFields[element.name]?.name ||
                        inputFields[element.name]
                      }
                      className={`h-full w-full flex items-center px-5 bg-bg-secondary/50 border border-solid border-stroke-primary rounded-10 outline-none focus:bg-bg-primary`}
                      readOnly
                      placeholder="Select Your Car Image"
                    />
                    <input
                      type="file"
                      name={element.name}
                      onChange={handleChange}
                      className={`absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer`}
                      accept=".jpg, .png, .jpeg, .webp"
                      disabled={!edit}
                    />
                  </div>
                )}
              </div>
            ))}
            <Button type="submit">{edit ? "Save" : "Edit"}</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCarDetails;
