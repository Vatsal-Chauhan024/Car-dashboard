import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import deleteCar from "../utilities/deleteCar";
import { useDispatch } from "react-redux";
import HTMLReactParser from "html-react-parser";

const TableComponent = ({ tableData, tableHeading, searchValue }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [mapData, setMapData] = useState(tableData);

  useEffect(() => {
    if (!searchValue) {
      setMapData(tableData);
    } else {
      const filteredData = tableData.filter((element) => {
        const carName = element.CarName.trim().toLowerCase();
        const companyName = element.CompanyName.trim().toLowerCase();
        const searchValueLower = searchValue.trim().toLowerCase();
        return (
          carName.includes(searchValueLower) ||
          companyName.includes(searchValueLower)
        );
      });
      setMapData(filteredData);
    }
  }, [searchValue, tableData]);

  return (
    <>
      <table className="table-fixed w-full">
        <thead className="">
          <tr className="">
            {tableHeading.map((element, key) => (
              <th
                key={key}
                className="py-4 px-3 text-sm md:text-base whitespace-nowrap text-secondary font-semibold"
              >
                {element}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mapData?.map((element, key) => (
            <tr
              className="*:py-4 *:px-3 *:text-sm *:md:text-base  *:max-w-40 w-full  odd:bg-bg-secondary *:text-center"
              key={key}
            
            >
              <td>{key + 1}</td>
              <td>
                <img
                  src={`http://localhost:8000/${element.CarImage}`}
                  alt=""
                  className="aspect-square w-12 mx-auto object-cover rounded-full"
                />
              </td>
              <td>{element.CarName}</td>
              <td>{element.CompanyName}</td>
              <td>{element.CarCapacity}</td>
              <td>{element.CarRent}</td>
              <td className=""><div>{element.CarDesc && HTMLReactParser(element.CarDesc)}</div></td>
              <td className="flex items-center justify-center gap-2 h-20 *:text-2xl *:cursor-pointer">
                <MdEdit
                  className="text-info/70 hover:text-info"
                  onClick={() =>
                    navigate(`/edit-car/${element._id}`, { state: element })
                  }
                />{" "}
                <MdDelete
                  className="text-danger/90 hover:text-danger"
                  onClick={() => deleteCar(element._id, dispatch)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
