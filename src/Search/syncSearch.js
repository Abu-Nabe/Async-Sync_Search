/** @format */
import React from "react";

import { dataArray } from './../Data/dataArray'

function SyncSearch() {
  return (
    <div
      className="bg-white mx-auto my-auto shadow-md p-5"
      style={{ width: "350px", height: "auto" }}
    >
      <p className="text-sm">Sync Search</p>
      <input
        type="text"
        placeholder="Type to begin searching"
        className="border border-gray-300 rounded p-2 w-full box-border pl-5 mt-1"
      />
      <p className="text-xs mt-1">With default display and search on focus</p>

      <div className="h-[200px] overflow-y-auto border border-gray-300">
      <table className="w-full bg-white mx-auto my-auto shadow-md">
          <tbody>
              {dataArray.map((array, index) => (
              <tr>
                <div className="border-b border-gray-300 p-3" onClick={() => {
                 
                }}>
                    <p class="text-left ml-2 font-bold text-sm">{array.name}</p>
                </div>
              </tr>
              ))}
          </tbody>
       </table>
      </div>
      
    </div>
  );
}

export default SyncSearch;
