import React, { useEffect, useRef, useState } from "react";

const SearchText = ({ isOpen, setIsOpen, searchRef, listArray, setListArray }) => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const textRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          searchRef.current &&
          !searchRef.current.contains(event.target) &&
          textRef.current &&
          !textRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };
  
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen, setIsOpen, searchRef]);
  
    useEffect(() => {
      const handleButtons = (event) => {
        if (event.key === "Escape") {
          setIsOpen(false);
        } else if (event.key === "ArrowDown") {
          if (hoveredIndex < listArray.length - 1) {
            setHoveredIndex(hoveredIndex + 1);
            scrollAndFocus();
          }
        } else if (event.key === "ArrowUp") {
          if (hoveredIndex > 0) {
            setHoveredIndex(hoveredIndex - 1);
            scrollAndFocus();
          }
        }else if (event.key === "Enter") {
            console.log("hey")
            if (hoveredIndex !== -1) {
              handleRowClick(hoveredIndex);
            }
        }
      };
  
      window.addEventListener("keydown", handleButtons);
  
      return () => {
        window.removeEventListener("keydown", handleButtons);
      };
    }, [hoveredIndex, listArray, setIsOpen]);
  
    const handleRowClick = (index) => {
      const updatedListArray = [...listArray];
      updatedListArray[index].selected = !updatedListArray[index].selected;
      setListArray(updatedListArray);
    };
  
    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredIndex(-1);
    };
  
    const scrollAndFocus = () => {
      if (hoveredIndex !== -1) {
        const element = textRef.current;
        const elements = element.querySelectorAll(".list-item");
        elements[hoveredIndex].focus();
      }
    };
  
    return (
      <div
        className={
          isOpen ? "h-[200px] overflow-y-auto border border-gray-300" : "hidden"
        }
        ref={textRef}
        tabIndex={0}
      >
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
                  onClick={() => handleRowClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p
                    className={`text-left ml-2 font-bold text-sm ${
                      hoveredIndex === index ? "text-blue-500" : ""
                    }`}
                  >
                    {array.name}
                  </p>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default SearchText;
  
