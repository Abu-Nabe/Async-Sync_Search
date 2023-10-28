/** @format */
export const handleClickOutside = (event, searchRef, textRef, setIsOpen) => {
  if (
    searchRef.current &&
    !searchRef.current.contains(event.target) &&
    textRef.current &&
    !textRef.current.contains(event.target)
  ) {
    setIsOpen(false);
  }
};

export const handleMouseEnter = (index, setHoveredIndex) => {
  setHoveredIndex(index);
};

export const handleMouseLeave = (setHoveredIndex) => {
  setHoveredIndex(-1);
};

export const handleRowClick = (index, listArray, setListArray) => {
  const updatedListArray = [...listArray];
  updatedListArray[index].selected = !updatedListArray[index].selected;
  setListArray(updatedListArray);
};
