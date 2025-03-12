import React from "react";
import JSX_useEffectRevamp from "../component/JSX_Concepts/02. JSX_Hooks/UseEffect/JSX_useEffect";
import { JSX_useContext } from "../component/JSX_Concepts/02. JSX_Hooks/ContextAPI/JSX_useContext";
import ReactRouter from "../component/JSX_Concepts/04. React-Router-DOM/01.  Understanding-RRDOM/router-home";
import JSX_RouterHome_1 from "../component/JSX_Concepts/04. React-Router-DOM/02. Basic-Example-RRDOM/router-home";

export const JSX_Root = () => {
  return (
    // <div className="flex justify-center items-center">
    //   {/* <ResponsiveCardDesign /> */}
    // </div>

    // <div className="p-2">
    //   <Profile />
    // </div>

    // Concepts
    <div>
      {/* <JSXAsync_Await /> */}
      {/* <JSX_Promises_Example /> */}
      {/* <HandleInput_LocalStorage /> */}
      {/* <JSX_useEffectRevamp /> */}
      {/* <JSX_useContext /> */}

      {/* <ReactRouter /> */}
      <JSX_RouterHome_1 />
    </div>

    // Project
    // <>
    //   <ResponsiveNavbar />
    // </>
  );
};
