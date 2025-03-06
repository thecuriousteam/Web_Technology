// Context consumers, useContext()

import React, { useContext } from "react";
import { BioContext } from ".";

const Profile = () => {
  // inorder to get the context we need to follow like this

  const { name, age } = useContext(BioContext);

  return (
    <div>
      Profile
      <h1>
        My name is: {name} & My age is: {age}
      </h1>
    </div>
  );
};

export default Profile;
