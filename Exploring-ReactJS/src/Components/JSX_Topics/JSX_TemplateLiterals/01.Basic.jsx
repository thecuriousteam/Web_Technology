import React from "react";

const TemplateLiteralsExample = () => {
	const data = {
		name: "Nandan",
		email: "nandangn@gmail.com",
		phone: "+911234567890",
	};
	return (
		<div>
			<div>
				<h1>Student Data</h1>
				<p>{`Name: ${data.name}
				Email: ${data.email}
				Phone: ${data.phone}
				`}</p>
			</div>
		</div>
	);
};

export default TemplateLiteralsExample;
