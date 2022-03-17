import FuseSearch from "./FuseSearch";
import React from "react"

export default function Fighters() {
    const [Input, setInput] = React.useState("Charles Oliveira")

    function handleSearch() {
        setInput(document.getElementById('selectedFighter').value)
    }
    console.log(Input)
    // Input.addEventListener("keyup", function(event) {
    //     // Number 13 is the "Enter" key on the keyboard
    //     if (event.keyCode === 13) {
    //       // Cancel the default action, if needed
    //       event.preventDefault();
    //       // Trigger the button element with a click
    //       document.getElementById("myBtn").click();
    //     }
    //   });
    return (
        <div>
            <div>
            <input type="text" id="selectedFighter" />
            <button id="myBtn" onClick={handleSearch}>Go</button>
            </div>
        <FuseSearch Input={Input} />
        </div>
    )
}