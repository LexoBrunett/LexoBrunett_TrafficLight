import React, { useState } from "react";


export default class TrafficLight extends React.Component {
	render(){
		return <div>
			<div id="trafficTop"></div>
			<div id="container"></div>
			<div className = {"red light "+extraYellowClass}
				onClick={()=> this.setState({color: "red"})}
			></div>
			<div className = {"yellow light "+extraYellowClass}
				onClick={()=> this.setState({color: "yellow"})}
			></div>
			<div className = {"green light "+extraYellowClass}
				onClick={()=> this.setState({color: "green"})}
			></div>
		</div>;

	}
}
