import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//create your first component
export function Home(props) {
	let style = [
		"red",
		"yellow",
		"green",
		"purple",
		"blue",
		"lightblue",
		"orange",
		"orangered",
		"fuchsia",
		"yellowgreen",
		"violet"
	];

	let [number, setNumber] = useState("0");
	console.log(number);

	return (
		<>
			<div className="container-fluid">
				<div>Pick a starting number</div>
				<input
					type="text"
					id="startNumber"
					onChange={e => setNumber(e.target.value)}
				/>
				<div
					className="btn btn-large btn-success ml-5 px-5"
					onClick={() => props.setCounter(parseInt(number))}>
					Set
				</div>
				<div
					className="btn btn-large btn-danger ml-3 px-5"
					onClick={() => props.setCounter(0)}>
					Reset
				</div>
				<div
					className="btn btn-large btn-warning ml-3 px-5"
					onClick={() => props.setRun()}>
					{props.run ? "Stop" : "Resume"}
				</div>
			</div>
			<div className="container-fluid main-frame justify-content-center text-center mt-5">
				<div>
					<i className="far fa-clock" />
				</div>
				<div
					className={
						props.num1 != 0 && props.run
							? `pulsate-${style[Math.floor(Math.random() * 11)]}`
							: style[Math.floor(Math.random() * 11)]
					}>
					{props.num1}
				</div>
				<div
					className={
						props.num2 != 0 && props.run
							? `pulsate-${style[Math.floor(Math.random() * 11)]}`
							: style[Math.floor(Math.random() * 11)]
					}>
					{props.num2}
				</div>
				<div
					className={
						props.num3 != 0 && props.run
							? `pulsate-${style[Math.floor(Math.random() * 11)]}`
							: style[Math.floor(Math.random() * 11)]
					}>
					{props.num3}
				</div>
				<div
					className={
						props.num4 != 0 && props.run
							? `pulsate-${style[Math.floor(Math.random() * 11)]}`
							: style[Math.floor(Math.random() * 11)]
					}>
					{props.num4}
				</div>
				<div
					className={
						props.num5 != 0 && props.run
							? `pulsate-${style[Math.floor(Math.random() * 11)]}`
							: style[Math.floor(Math.random() * 11)]
					}>
					{props.num5}
				</div>
				<div
					className={
						props.num6 != 0 && props.run
							? `pulsate-${style[Math.floor(Math.random() * 11)]}`
							: style[Math.floor(Math.random() * 11)]
					}>
					{props.num6}
				</div>
			</div>
		</>
	);
}

Home.propTypes = {
	setRun: PropTypes.func,
	run: PropTypes.bool,
	setCounter: PropTypes.func,
	num1: PropTypes.string,
	num2: PropTypes.string,
	num3: PropTypes.string,
	num4: PropTypes.string,
	num5: PropTypes.string,
	num6: PropTypes.string
};
