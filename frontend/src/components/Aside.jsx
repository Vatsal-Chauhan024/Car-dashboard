import React, { useEffect, useState } from "react";
import AsideNavbar from "../assets/datas/AsideNavbar";
import { Link, useLocation } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import ImageField from "./ImageField";
import UserImage from "../assets/images/user.jpg"

const Aside = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment !== "");

    const finalSplit = pathSegments.map((segment) =>
      segment.split("-").join(" ")
    );

    for (let index = 0; index < AsideNavbar.length; index++) {
      const itemName = AsideNavbar[index].itemName.toLowerCase();

      if (itemName === finalSplit.join(" ")) {
        setActiveIndex(index);
        break;
      }
    }
  }, [activeIndex]);

  return (
    <div className="relative">
      <div className="p-5 flex flex-col gap-5 xl:gap-10">
        <Link
          to="/"
          className="flex items-center justify-normal gap-5  w-full relative group"
        >
          <ImageField src={UserImage} alt="error-user-icon" />
          <div className="flex flex-col gap-0 ">
            <span className="whitespace-nowrap">Welcome Back</span>
            <strong className="">Vatsal</strong>
          </div>
        </Link>

        <ul className="w-full flex flex-row xl:flex-col justify-center  gap-3 flex-wrap">
          {AsideNavbar.map((element, key) => (
            <Link
              to={element.itemLink}
              className={` h-fit p-3 flex justify-between w-fit xl:w-full items-center hover:bg-white rounded-10 *:hover:text-black ${
                key === activeIndex ? "bg-white *:text-black" : "*:text-primary"
              }   `}
              key={key}
              onClick={() => handleActiveIndex(key)}
            >
              <div className="flex items-center gap-4">
                {element.itemIcon}
                <span className="rounded-10  xl:block text-xs sm:text-base">
                  {element.itemName}
                </span>
              </div>
              <VscThreeBars className="hidden xl:block" />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
