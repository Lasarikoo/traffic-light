import React from "react";
import { useState } from "react";



function Lights() {
    const [ color, setColor] = useState("red");
    let lights = [ "red", "yellow", "green" ];

    function colorChange () {
        let currentColor = lights.indexOf(color);
        let nextColor = (currentColor + 1) % lights.length;
        setColor(lights[nextColor]);
    }

    if (color === "purple") {
        return (
        <div className="container traffic-light">
            <button className={`red-light ${color === "red" ? "selected" : ""}`} onClick={() => setColor("red")}></button>
            <button className={`yellow-light ${color === "yellow" ? "selected" : ""}`} onClick={() => setColor("yellow")}></button>
            <button className={`green-light ${color === "green" ? "selected" : ""}`} onClick={() => setColor("green")}></button>
            <button className={`purple-light ${color === "purple" ? "selected" : ""}`} onClick={() => setColor("purple")}></button>
            <div>
                <button onClick={colorChange}>Next</button>
                <button onClick={() => setColor("purple")}>Add+</button>
            </div> 
        </div>
        )
    } else {
        return (
            <div className="container traffic-light">
                
                <button className={`red-light ${color === "red" ? "selected" : ""}`} onClick={() => setColor("red")}></button>
                <button className={`yellow-light ${color === "yellow" ? "selected" : ""}`} onClick={() => setColor("yellow")}></button>
                <button className={`green-light ${color === "green" ? "selected" : ""}`} onClick={() => setColor("green")}></button>
                <div>
                    <button onClick={colorChange}>Next</button>
                    <button onClick={() => setColor("purple")}>Add+</button>
                </div> 
            </div>
        );
    }
    
};

export default Lights;