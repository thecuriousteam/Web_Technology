import React, { useContext, useState } from "react";
import { MentorContext } from "./MentorContext";

const AddMentor = () => {
  const { addMentor } = useContext(MentorContext);
  const [mentor, setMentor] = useState({
    name: "",
    category: "",
    skills: "",
    experience: "",
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    addMentor({ ...mentor, skills: mentor.skills.split(", ") });

    // reset the input
    setMentor({ name: "", category: "", skills: "", experience: "" });
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmitForm}>
        <div>
          <div className="grid grid-cols-5 p-2 gap-2">
            <div className="space-x-2 p-2 border-2 border-violet-500 rounded-lg flex justify-center items-center">
              <label>Mentor Name:</label>
              <input
                type="text"
                value={mentor.name}
                placeholder="Name"
                onChange={(event) =>
                  setMentor({ ...mentor, name: event.target.value })
                }
                className="p-2"
              />
            </div>

            <div className="p-2 border-2 border-violet-500 rounded-lg flex justify-center items-center">
              <select
                value={mentor.category}
                onChange={(event) =>
                  setMentor({ ...mentor, category: event.target.value })
                }
                className="w-full"
              >
                <option value="">All Category</option>
                <option value="Technology">Technology</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <div className=" space-x-2 p-2 border-2 border-violet-500 rounded-lg flex justify-center items-center">
              <label>Mentor Skills:</label>
              <input
                type="text"
                value={mentor.skills}
                placeholder="Skills (Comma Saparated)"
                onChange={(event) =>
                  setMentor({ ...mentor, skills: event.target.value })
                }
                className="p-2"
              />
            </div>

            <div className=" space-x-2 p-2 border-2 border-violet-500 rounded-lg flex justify-center items-center">
              <label>Mentor Experience:</label>
              <input
                type="number"
                value={mentor.experience}
                placeholder="Experience"
                onChange={(event) =>
                  setMentor({ ...mentor, experience: event.target.value })
                }
                className="p-2"
              />
            </div>

            <div className="border-2 border-violet-500 rounded-lg flex justify-center items-center">
              <button
                type="submit"
                className="text-white bg-violet-600 rounded-lg p-2"
              >
                Add Mentor
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMentor;
