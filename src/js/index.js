//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

export function App() {

    const [selectedcolor, setSelectedColor] = useState("red");

    return (
        <div>
            <div className="traffic-light">

                <div className={
                    "light red" + (selectedColor === "red" ? " glow" : "")
                }></div>

                <div classsName={"light yellow" + (selectedColor === "yellow" ? " glow" : "")
                }></div>

            </div>

            <div className={"light green" + (selectedColor === "green" ? " glow" : "")
            }>

            </div>


        </div >

    );
}
console.log("Hello")





//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));