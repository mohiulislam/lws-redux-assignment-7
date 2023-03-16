import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../features/searchJob/searchJobSlice";
import { sort } from "../features/sortJob/sortJobSlice";

function JobsContainer({ children }) {
  const dispatch = useDispatch();
  function handleSearch(e) {
    dispatch(search(e.target.value));
  }
  function handleSort(e) {
    dispatch(sort(e.target.value));
  }
  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search Job"
              className="search-input"
              id="lws-searchJob"
            />
          </div>
          <select
            id="lws-sort"
            name="sort"
            autoComplete="sort"
            className="flex-1"
            onChange={(e) => handleSort(e)}
          >
            <option value={"default"}>Default</option>
            <option value={"lowToHigh"}>Salary (Low to High)</option>
            <option value={"highToLow"}>Salary (High to Low)</option>
          </select>
        </div>
      </div>
      <div className="jobs-list">{children}</div>
    </main>
  );
}

export default JobsContainer;
