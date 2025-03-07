import { MentorContext } from "./MentorContext";
import { useState } from "react";
export const MentorProvider = ({ children }) => {
  // state variables
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      category: "Technology",
      skills: ["React", "Node.js"],
      experience: 5,
    },
    {
      id: 2,
      name: "Bob Smith",
      category: "Marketing",
      skills: ["SEO", "Content Strategy"],
      experience: 8,
    },
    {
      id: 3,
      name: "Charlie Brown",
      category: "Finance",
      skills: ["Investment", "Taxation"],
      experience: 10,
    },
  ]);

  const [filter, setFilter] = useState({
    search: "",
    category: "",
    experience: "",
  });

  // add mentor
  const addMentor = (mentor) => {
    setMentors([...mentors, { ...mentor, id: Date.now() }]);
  };

  // alternative beginner version
  // const basicAddMentor = (mentor) => {
  //   const newMentor = {
  //     id: new Date().getTime(),
  //     name: mentor.name,
  //     category: mentor.category,
  //     skills: mentor.skills,
  //     experience: mentor.experience,
  //   };
  //   setMentors(mentors.concat(newMentor));
  // };

  // remove mentor
  const removeMentor = (mentorId) => {
    setMentors(mentors.filter((mentor) => mentor.id !== mentorId));
  };

  // update filters
  const updateFilter = (newFilter) => {
    setFilter((prevFilter) => ({ ...prevFilter, ...newFilter }));
  };

  console.log(typeof mentors);

  // search & filter
  const filteredMentors = mentors.filter((mentor) => {
    return (
      // Implementing search, filter based on category & experience
      (filter.search
        ? mentor.name.toLowerCase().includes(filter.search.toLowerCase())
        : true) &&
      (filter.category ? mentor.category === filter.category : true) &&
      (filter.experience
        ? mentor.experience >= parseInt(filter.experience)
        : true)
    );
  });

  // const basicFilteredMentors = mentors.filter((mentor) => {
  //   let searchOperation =
  //     filter.search === "" ||
  //     mentor.search.toLowerCase().includes(filter.search.toLowerCase());

  //   let filterByCategory =
  //     filter.category === "" || mentor.category === filter.category;

  //   let filterByExperience =
  //     filter.experience === "" ||
  //     mentor.experience >= parseInt(filter.experience);

  //   return searchOperation && filterByCategory && filterByExperience;
  // });

  return (
    <MentorContext.Provider
      value={{
        mentors,
        addMentor,
        removeMentor,
        updateFilter,
        filteredMentors,
      }}
    >
      {children}
    </MentorContext.Provider>
  );
};
