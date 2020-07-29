import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="container-fluid text-center mt-5">
			<div>clock</div>
			<div>{props.num1}</div>
			<div>{props.num2}</div>
			<div>{props.num3}</div>
			<div>{props.num4}</div>
			<div>{props.num5}</div>
			<div>{props.num6}</div>
		</div>
	);
}

Home.propTypes = {
	num1: PropTypes.string,
	num2: PropTypes.string,
	num3: PropTypes.string,
	num4: PropTypes.string,
	num5: PropTypes.string,
	num6: PropTypes.string
};
