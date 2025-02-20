import React from "react";

import ObjectUseStateExample from "../Components/JSX_Topics/JSX_useStateExamples/object_useState";
import UseEffectExamples from "../Components/JSX_Topics/JSX_useEffectExamples/_1_useEffect_examples";
import Intro_React from "../Components/JSX_Topics/01. JSX_Basics/_1_Intro";
import FunctionalComponent from "../Components/JSX_Topics/02. JSX_Components/_1_functional_component";
import ClassComponentReact from "../Components/JSX_Topics/02. JSX_Components/_2_class_components";
import TemplateLiteralsExample from "../Components/JSX_Topics/JSX_TemplateLiterals/01.Basic";
import Conditional_RenderingExample from "../Components/JSX_Topics/JSX_Conditional_Rendring/_1_conditional_rendering";
import DynamicContent from "../Components/JSX_Topics/03. JSX_Embedding_Dynamic_Content/01. Dynamic_Content";
import ListDataExamples from "../Components/JSX_Topics/04. JSX_List_Rendering/01. List_Data";
import PropsDestructuringExample from "../Components/JSX_Topics/05. JSX_Props_Destructuring/01. Props_Destructuring";

const JSXBasics = () => {
	return (
		<div className="p-5">
			<h1 className="text-center justify-center items-center text-[20px]">
				JSXBasics
			</h1>

			{/* Jsx Basics */}
			{/* <Intro_React /> */}
			{/* <FunctionalComponent /> */}
			{/* <ClassComponentReact /> */}
			{/* <TemplateLiteralsExample /> */}
			{/* <Conditional_RenderingExample /> */}

			{/* <DynamicContent /> */}
			{/* <ListDataExamples /> */}
			<PropsDestructuringExample />
		</div>
	);
};

export default JSXBasics;
