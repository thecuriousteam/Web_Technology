import React from "react";
import ResponsiveCardDesign from "../component/JSX_Projects/01. Responsive_Card";
import Profile from "../component/JSX_Projects/03. FindMentorUi";
import JSXAsync_Await from "../component/JSX_Concepts/01. JSX_Async_Await";
import JSX_Promises_Example from "../component/JSX_Concepts/02. JSX_Promise";
import HandleInput_LocalStorage from "../component/JSX_Concepts/03. JSX_HandleInput";

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
      <HandleInput_LocalStorage />
    </div>
  );
};
