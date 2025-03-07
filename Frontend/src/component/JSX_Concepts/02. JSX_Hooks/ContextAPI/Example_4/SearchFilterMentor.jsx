import React, { useContext } from "react";
import { MentorContext } from "./MentorContext";
import { FiSearch } from "react-icons/fi";
// consumer

const SearchFilterMentor = () => {
  const { updateFilter } = useContext(MentorContext);

  return (
    <div className="p-5 flex justify-center items-center">
      {/* update filter components */}

      <div className="w-full p-2 mt-5 ">
        <div className="grid grid-cols-3 w-full">
          <div className="space-x-2 flex justify-center items-center">
            <label className="bg-violet-500 p-2 text-white rounded-lg w-[40%] flex justify-center items-center gap-2">
              <FiSearch className="text-lg" /> Search Mentor Here
            </label>
            <input
              type="text"
              onChange={(event) => updateFilter({ search: event.target.value })}
              placeholder="Search By Name"
              className="border-2 border-violet-500 p-2 rounded-lg w-[60%]"
            />
          </div>

          <div className="flex justify-center items-center">
            {/* selectors for category */}
            <select
              onChange={(event) =>
                updateFilter({ category: event.target.value })
              }
              className="p-2 border-2 border-violet-500 rounded-lg w-[80%]"
            >
              <option value="">All Category</option>
              <option value="Technology">Technology</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          <div className="flex justify-center items-center">
            {/* experience search */}
            <input
              type="number"
              onChange={(event) =>
                updateFilter({ experience: event.target.value })
              }
              placeholder="Minimum Year's Of Experience"
              className="p-2 border-2 border-violet-500 rounded-lg w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterMentor;
