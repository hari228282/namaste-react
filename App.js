import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Namaste Hariom");
// const heading2 = React.createElement("h1", {}, "Namaste Hariom");
const heading2 = React.createElement("h1", { id: "hello", key: "h1"}, "Namaste Hariom Kumar");  
// const heading = <h1>Namaste Hariom</h1>; 

//todo jsx => React.createElement() => OBJECT => DOM
const heading = (
    <h1 id="hello" className="hello2">
        Namaste Hariom Kumar wertyuil
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)