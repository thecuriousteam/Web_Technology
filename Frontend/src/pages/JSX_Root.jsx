import React from "react";
import JSX_useEffectRevamp from "../component/JSX_Concepts/02. JSX_Hooks/UseEffect/JSX_useEffect";
import { JSX_useContext } from "../component/JSX_Concepts/02. JSX_Hooks/ContextAPI/JSX_useContext";
import ReactRouter from "../component/JSX_Concepts/04. React-Router-DOM/01.  Understanding-RRDOM/router-home";
import JSX_RouterHome_1 from "../component/JSX_Concepts/04. React-Router-DOM/02. Basic-Example-RRDOM/router-home";
import UserApp from "../component/JSX_Concepts/04. React-Router-DOM/03. RROM-useContext/User-APP";
import TodoApp from "../component/JSX_Concepts/04. React-Router-DOM/04. RRDOM-Todo/Todo-App";
import DynamicRoutingExample from "../component/JSX_Concepts/04. React-Router-DOM/05. Dynamic-Routing/01. Dynamic-Routing-Params";
import { ProductApp } from "../component/JSX_Concepts/04. React-Router-DOM/05. Dynamic-Routing/02. RealWorldExample-1";
import { BlogPostApp } from "../component/JSX_Concepts/04. React-Router-DOM/05. Dynamic-Routing/02. RealWorldExample-2";

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
      {/* <JSX_RouterHome_1 /> */}
      {/* <UserApp /> */}
      {/* <TodoApp /> */}
      {/* <DynamicRoutingExample /> */}
      {/* <ProductApp /> */}
      <BlogPostApp />
    </div>

    // Project
    // <>
    //   <ResponsiveNavbar />
    // </>
  );
};
