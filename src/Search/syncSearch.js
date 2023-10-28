/** @format */
import React, { useState, useRef } from "react";

import SearchText from "./../SearchView/searchView";
import { dataArray } from "./../Data/dataArray";

function SyncSearch() {
  const [isSearch, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [listArray, setListArray] = useState(dataArray);
  const searchRef = useRef(null);

  const openSearch = () => {
    if (!isSearch) {
      setSearch(true);
    }
  };

  const handleSearchTextChange = (e) => {
    const text = e.target.value.toLowerCase().trim();

    if (text === "") {
      // If the search text is empty, return to the default dataArray
      setListArray(dataArray);
    } else {
      // Update the listArray with filtered results
      const updatedListArray = dataArray.filter((item) =>
        item.name.toLowerCase().includes(text)
      );
  
      // Update the state with the filtered list
      setListArray(updatedListArray);
    }
  
    // Set the search text state
    setSearchText(text);
  };

  return (
    <div
      className="bg-white mx-auto my-auto shadow-md p-5"
      style={{ width: "350px", height: "auto"}}
    >
      <p className="text-sm">Sync Search</p>
      <input
        ref={searchRef}
        type="text"
        placeholder="Type to begin searching"
        className="border border-gray-300 rounded p-2 w-full box-border pl-5 mt-1"
        onClick={openSearch}
        onChange={handleSearchTextChange}
      />
      <p className={isSearch ? "hidden" : "text-xs mt-1"}>With default display and search on focus</p>

      <SearchText
        isOpen={isSearch}
        setIsOpen={setSearch}
        searchRef={searchRef}
        listArray={listArray}
        setListArray={setListArray}
        isAsync={false}
      />
    </div>
  );
}

export default SyncSearch;
