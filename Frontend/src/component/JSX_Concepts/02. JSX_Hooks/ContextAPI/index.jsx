// creating a ware house that holds data

// Step 1
import { createContext } from "react";

// when we create a variable with createContext() it acts like a storage element and its first letter always should be capital
export const BioContext = createContext();

// Step 2 - Craete a Provider Component
// Provider Component - It is property of context component, we pass value to the provider component which makes it accessible to child component (The value should passed inside like this {{}} if its more than one)

export const BioProvider = ({ children }) => {
  const user = { name: "John Doe", age: 25 };

  return (
    <BioContext.Provider value={user}>
      {/* It act like a ware house */}
      {children}
    </BioContext.Provider>
  );
};

// Step 3 - In child Component Can Consume the directly using useContext(<Provider>)

// Step 4 - Warapping all the consumers of data inside the provider component
