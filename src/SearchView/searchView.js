/** @format */

import React, { useEffect, useRef, useState } from "react";

import { handleButtons } from "./../Navigation/arrowNavigation";
import { handleClickOutside, handleMouseEnter, handleMouseLeave, handleRowClick} from "./../Navigation/mouseNavigation";

const SearchText = ({
  isOpen,
  setIsOpen,
  searchRef,
  listArray,
  setListArray,
  isAsync,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const textRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (event) => {
      handleClickOutside(event, searchRef, textRef, setIsOpen);
    };

    if (isOpen) {
      document.addEventListener("mousedown", onClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen, setIsOpen, searchRef]);

  useEffect(() => {
    const eventHandler = (event) => {
      handleButtons(event, isOpen, hoveredIndex, listArray, setListArray, setIsOpen, setHoveredIndex, handleRowClick, textRef);
    };
  
    window.addEventListener("keydown", eventHandler);
  
    return () => {
      window.removeEventListener("keydown", eventHandler);
    };
  }, [hoveredIndex, listArray, setIsOpen]);

  return (
    <div
      className={
        isOpen ? "h-[200px] overflow-y-auto border border-gray-300" : "hidden"
      }
      ref={textRef}
      tabIndex={0}
    >
      {listArray.length > 0 ? (
        <table className="w-full bg-white mx-auto my-auto shadow-md">
          <tbody>
            {listArray.map((array, index) => (
              <tr key={index}>
                <div
                  className={`border-b border-gray-300 p-3 list-item`}
                  tabIndex={0}
                  style={{
                    background: array.selected ? "#e3e3e3" : "white",
                    cursor: "pointer",
                    transition: "background 0.3s",
                    outline: "none",
                  }}
                  onClick={() => handleRowClick(index, listArray, setListArray)}
                  onMouseEnter={() => handleMouseEnter(index, setHoveredIndex)}
                  onMouseLeave={() => handleMouseLeave(setHoveredIndex)}
                >
                  <p
                    className={`text-left ml-2 font-bold text-sm ${
                      hoveredIndex === index ? "text-blue-500" : ""
                    }`}
                  >
                    {array.name}
                  </p>
                  <p className={isAsync ? "text-left ml-2 text-sm" : "hidden"}>
                    Age: {array.age} - Hobby: {array.hobbies}
                  </p>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-sm flex justify-center items-center h-40">No results were found</p>
      )}
    </div>
  );
};

export default SearchText;
