import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext-Provider";

const UserProfile = () => {
  // calllig context
  const { user, updateUser } = useContext(UserContext);

  // setting is editing or not editing
  const [editing, setEditing] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(user);

  console.log("User Data: ", user);

  /*
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Software Engineer",
    bio: "Passionate developer with 5 years of experience in React and Node.js.",
  }
  */

  // handle edit state
  const handleEditState = () => {
    setEditing(true);
  };

  const handleSaveState = () => {
    updateUser(updateInfo);
    setEditing(false);
  };

  return (
    <div>
      <div>
        {/* conditional rendering */}

        {editing ? (
          // taking input
          <div>
            <label>Your Name: </label>
            <input
              type="text"
              placeholder="Your Name"
              value={updateInfo.name}
              onChange={(event) =>
                setUpdateInfo({ ...updateInfo, name: event.target.value })
              }
            />
            <label>Your Email: </label>
            <input
              type="email"
              value={updateInfo.email}
              placeholder="Your Email ID"
              onChange={(event) =>
                setUpdateInfo({ ...updateInfo, email: event.target.value })
              }
            />
            <label>Your Role</label>
            <input
              type="text"
              value={updateInfo.role}
              placeholder="Your Role"
              onChange={(event) =>
                setUpdateInfo({ ...updateInfo, role: event.target.value })
              }
            />
            <label>Your Bio</label>
            <input
              type="text"
              value={updateInfo.bio}
              placeholder="Your Bio"
              onChange={(event) =>
                setUpdateInfo({ ...updateInfo, bio: event.target.value })
              }
            />
            <button
              onClick={handleSaveState}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        ) : (
          // user data
          <div>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <p>
              <strong>Bio:</strong> {user.bio}
            </p>

            <button
              onClick={handleEditState}
              className="bg-gray-500 text-white px-4 py-2 rounded mt-3"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
