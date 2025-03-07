import React, { useContext } from "react";
import { MentorContext } from "./MentorContext";

// consumers
const MentorList = () => {
  const { filteredMentors, removeMentor } = useContext(MentorContext);

  console.log(
    "Filtered Mentors List: ",
    filteredMentors,
    typeof filteredMentors
  );

  console.log("Remove Mentor: ", removeMentor);
  return (
    <div className="p-5">
      <h1>Available Mentors</h1>
      {/* check the length of filtered mentor */}
      {filteredMentors.length === 0 ? (
        <p>No Mentors Are Available</p>
      ) : (
        filteredMentors.map((mentor) => (
          <div key={mentor.id}>
            <h3>{mentor.name}</h3>

            {console.log("Mentor Name: ", mentor.name)}
            <p>
              <strong>Category:</strong> {mentor.category}
            </p>
            <p>
              <strong>Skills:</strong> {mentor.skills.join(", ")}
              {console.log("Testing: ", mentor.skills.join(", "))}
            </p>
            <p>
              <strong>Experience:</strong> {mentor.experience} years
            </p>
            <button onClick={() => removeMentor(mentor.id)}>
              Remove Mentor
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MentorList;
