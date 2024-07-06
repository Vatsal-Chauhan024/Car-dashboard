import React from "react";

const HrComponent = ({ className }) => {
  return (
    <>
      <div
        className={`w-full h-[1px] bg-primary/20 rounded-10 ${className}`}
      ></div>
    </>
  );
};

export default HrComponent;
