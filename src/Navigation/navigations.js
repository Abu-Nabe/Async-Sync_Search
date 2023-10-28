/** @format */

// Checks if u click outside views that aren't in the ref
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

// button pressed
const handleButtons = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
    if (event.key === "ArrowDown" && hoveredIndex < listArray.length - 1) {
      console.log("wtf")
      setHoveredIndex(hoveredIndex + 1);
    } else if (event.key === "ArrowUp" && hoveredIndex > 0) {
      setHoveredIndex(hoveredIndex - 1);
    }
  };

window.addEventListener("keydown", handleEscape);

return () => {
  window.removeEventListener("keydown", handleEscape);
};

// Check if row has been clicked
const handleRowClick = (index) => {
  const updatedListArray = [...listArray];
  updatedListArray[index].selected = !updatedListArray[index].selected;
  setListArray(updatedListArray);
};

// If enter button pressed
const handleMouseEnter = (index) => {
  setHoveredIndex(index);
};

// If mouse is away 
const handleMouseLeave = () => {
  setHoveredIndex(null);
};
