//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
var counter = 0;
var seconds;
var run = true;

const setCounter = number => {
	counter = number;
};

var myTimer = () => {
	console.log(counter);
	counter += 1;
	seconds = "000000" + counter;
	seconds = seconds.slice(-6);
	console.log(seconds);

	ReactDOM.render(
		<Home
			setCounter={setCounter}
			num1={seconds.charAt(0)}
			num2={seconds.charAt(1)}
			num3={seconds.charAt(2)}
			num4={seconds.charAt(3)}
			num5={seconds.charAt(4)}
			num6={seconds.charAt(5)}
		/>,
		document.querySelector("#app")
	);
};

var myInterval = setInterval(myTimer, 1000);

const stop = () => {
	clearInterval(myInterval);
};
