import React, { useState, useRef } from "react";

import SearchText from "./../SearchView/searchView";
import { dataArray } from './../Data/dataArray'

function AsyncSearch() {
  const [isSearch, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [displayText, setDisplayText] = useState("With description and custom results display");
  const [listArray, setListArray] = useState(dataArray);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);

  let debounceTimeout;

  const onTextChange = (e) => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      // Will be called when user stops typing for a set period of time
      setIsLoading(true)
      onTextEnd(e);
    }, 500); // Can change to what you prefer
  };

  const onTextEnd = (e) => {
    setSearch(true);
    const text = e.target.value.toLowerCase().trim();
  
    if (text === "") {
      // set both loading and search to false to reset when cleared
      setIsLoading(false)
      setSearch(false);
      // If the search text is empty, return to the default dataArray
      setListArray(dataArray);
    } else {
      // Delay to make use of setIsLoading
      setTimeout(() => {
        setIsLoading(false)
        // Update the listArray with filtered results
        const updatedListArray = dataArray.filter((item) =>
          item.name.toLowerCase().includes(text)
        );
  
        // Update the state with the filtered list
        setListArray(updatedListArray);
      }, 1000); 
    }
  
    // Set the search text state
    setSearchText(text);
  };
  

  return (
    <div className="bg-white mx-auto my-auto shadow-md p-5" style={{ width: '350px', height: 'auto' }}>
      <p className="text-sm">Async Search</p>
      <input ref={searchRef} type="text" 
      placeholder="Type to begin searching" 
      className="border border-gray-300 rounded p-2 w-full box-border pl-5 mt-1"
      onChange={onTextChange}
      />
      <p className={isSearch ? "hidden" : "text-xs mt-1"}>With description and custom results display</p>

      {isLoading ? (
        <div className={isSearch ? "w-8 h-8 border-t-4 border-gray-400 border-solid rounded-full animate-spin mx-auto my-auto mt-2" : "hidden"}></div>
      ) : (
        <SearchText
          isOpen={isSearch}
          setIsOpen={setSearch}
          searchRef={searchRef}
          listArray={listArray}
          setListArray={setListArray}
          isAsync={true}
        />
      )}
    </div>
  );
}

export default AsyncSearch;
