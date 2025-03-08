// Note - it is a way of passing data through the component tree, without having to pass props manualy at every entry level, ( it allows data to be shared across components without explecitly passing props down the component), In React app, data is passed from a parent component to child components via props. However, in deep component trees, prop drilling can become problematic. useContext solves this by allowing components to directly access shared data. createContext() - create a contextObject, Provider - a component provides context value to the children, useContext(Consumer) - a hook alloes us to consume the context

import React from "react";
import { MentorProvider } from "./Example_4/MentorProvider";
import MentorList from "./Example_4/MentorList";
import SearchFilterMentor from "./Example_4/SearchFilterMentor";
import AddMentor from "./Example_4/AddMentor";

export const JSX_useContext = () => {
  return (
    <div>
      {/* <BioProvider> */}
      {/* Wrap all the consuming components */}
      {/* <Profile /> */}
      {/* </BioProvider> */}

      {/* <AuthProvider>
        <Login />
        <UserProfile />
      </AuthProvider> */}

      {/* <CartProvider>
        <ProductList />
        <ProductCart />
      </CartProvider> */}

      <MentorProvider>
        <SearchFilterMentor />
        <MentorList />

        <AddMentor />
      </MentorProvider>
    </div>
  );
};
