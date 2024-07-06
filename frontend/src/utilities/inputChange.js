export const inputChange = (e, inputFields, setInputFields) => {
    const { name, value, files } = e.target;

    if (name != "CarImage") {
      setInputFields({
        ...inputFields,
        [name]: value,
      });
    } else {
      setInputFields({
        ...inputFields,
        [name]: files[0],
      });
    }
}