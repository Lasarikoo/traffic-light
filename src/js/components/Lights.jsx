import React from "react";
import { useState } from "react";

function Lights() {
    const [ color, setColor] = useState("red");
    


    return (
        <div className="container traffic-light">
            <button onClick={() => setColor("red")}><div className={`red-light ${color === "red" ? "selected" : ""}`}></div></button>
            <button onClick={() => setColor("yellow")}><div className={`yellow-light ${color === "yellow" ? "selected" : ""}`}></div></button>
            <button onClick={() => setColor("green")}><div className={`green-light ${color === "green" ? "selected" : ""}`}></div></button>
        </div>
    );
};

export default Lights;