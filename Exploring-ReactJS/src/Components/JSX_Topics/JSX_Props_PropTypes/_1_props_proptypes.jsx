import React from "react";
import PropTypes from "prop-types";
// we are using props in this example
const Example1 = (props) => {
	return (
		<div>
			{/* props.username */}
			<h1>Hello, {props.username}</h1>
			<p>Name: {props.name}</p>
			<p>Email: {props.email}</p>
			<p>Age: {props.age}</p>
		</div>
	);
};

// proptype using syntax

// componentName.propTypes = {
// props: PropTypes.dataType
// }
Example1.propTypes = {
	username: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
};

const Props_PropsTypeExample = () => {
	return (
		<div>
			_1_props_propTypes
			<div>
				{/* passing props to the function */}
				<Example1
					username="gnnandan"
					name="Nandan"
					email="nandan@gmail.com"
					age={24}
				/>
			</div>
		</div>
	);
};

export default Props_PropsTypeExample;
