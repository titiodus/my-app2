import React, {useState } from "react";

function MouseOver() {
    const [state, setState] = useState("You don't want a cuppa 🍵?");
    // Handle mouse over...
    const handleMouseOver  = (event) => {
        setState("Come on, have a cup of joe 🍵")
        setTimeout(() => {
            setState("You don't want a cuppa 🍵?")
        }, 1000)
    }
    // render...
    return (
        <section className="main-container">
            <h1 onMouseOver={handleMouseOver} className="hover-me">{state}</h1>
        </section>
    )
}

export default MouseOver;