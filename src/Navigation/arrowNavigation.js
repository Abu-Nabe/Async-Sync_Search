export function handleButtons(event, isOpen, hoveredIndex, listArray, setListArray, setIsOpen, setHoveredIndex, handleRowClick, textRef) {
  if (isOpen) {
    if (event.key === "Escape") {
      setIsOpen(false);
    } else if (event.key === "ArrowDown") {
      if (hoveredIndex < listArray.length - 1) {
        setHoveredIndex(hoveredIndex + 1);
        scrollAndFocus(hoveredIndex, textRef);
      }
    } else if (event.key === "ArrowUp") {
      if (hoveredIndex > 0) {
        setHoveredIndex(hoveredIndex - 1);
        scrollAndFocus(hoveredIndex, textRef);
      }
    } else if (event.key === "Enter") {
      if (hoveredIndex !== -1) {
        handleRowClick(hoveredIndex, listArray, setListArray);
      }
    }
  }
}

const scrollAndFocus = (hoveredIndex, textRef) => {
  if (hoveredIndex !== -1) {
    const element = textRef.current;
    const elements = element.querySelectorAll(".list-item");
    elements[hoveredIndex].focus();
  }
};

