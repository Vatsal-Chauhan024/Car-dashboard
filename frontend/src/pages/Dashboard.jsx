import React, { Fragment, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { MdSearch } from "react-icons/md";
import HrComponent from "../components/HrComponent";
import HeadingComponent from "../components/HeadingComponent";
import CardData from "../assets/datas/CardData";
import Cards from "../components/Cards";
import TableHeading from "../assets/datas/TableHeading";
import TableComponent from "../components/TableComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarDetails } from "../store/apiCallFunctions/FetchCarDetails";
import { Triangle } from "react-loader-spinner";
import { toast } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCarDetails());
  }, []);


  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      {tableData.data.status === 69 &&
        toast.error("Server Error!! Try Again Later", {
          theme: "colored",
          autoClose: 2000,
          hideProgressBar: true,
        })}
      <div className=" mt-5 flex flex-col gap-8">
        <div className=" flex gap-5 flex-col sm:flex-row">
          <div className="bg-btn-primary/40 p-1 h-fit rounded-10 relative w-full">
            <SearchBar
              value={searchValue}
              placeholder="Search here"
              onChange={(e) => setSearchValue(e.target.value)}
              className="border-btn-primary"
            />
            <MdSearch
              className={`absolute right-4 top-4 text-2xl text-primary cursor-pointer ${
                searchValue.length > 0 ? "opacity-0" : "opacity-100"
              } `}
            />
          </div>
        </div>
        <HrComponent />

        <div className="flex flex-col gap-8">
          <HeadingComponent headingProps="Dashboard" />

          <div className="w-full flex flex-wrap gap-5">
            {CardData.map((element, key) => (
              <Fragment key={key}>
                <Cards
                  cardHeadingProps={element.CardHeading}
                  cardTextProps={tableData.data.carData?.length}
                  className="bg-card-primary h-32"
                />
              </Fragment>
            ))}
          </div>

          {tableData.loading ? (
            <>
              <div className="w-full h-full flex items-center justify-center">
                <Triangle
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="triangle-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            </>
          ) : (
            <>
              <div className="relative overflow-x-auto h-72">
                <TableComponent
                searchValue = {searchValue}
                  tableData={tableData.data.carData}
                  tableHeading={TableHeading}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
