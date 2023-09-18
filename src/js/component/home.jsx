import React, { useState } from "react";
import "../../styles/index.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


export function trafficLights() {

	const [selectedColor, setSelectedColor] = useState("red");
	console.log(selectedColor);
	return (
		<div>
			<div className="traffic-post">

			</div>
			<div className="traffic-light">

				<div onClick={() => (setSelectedColor("red"))} className={"light red" + (selectedColor === "red" ? " glow" : "")
				}></div>



				<div onClick={() => (setSelectedColor("yellow"))} className={"light yellow" + (selectedColor === "yellow" ? " glowyellow" : "")
				}></div>



				<div onClick={() => (setSelectedColor("green"))} className={"light green" + (selectedColor === "green" ? " glowgreen" : "")
				}>
				</div>

			</div>
		</div >

	);
}
console.log("Hello")
export default trafficLights;