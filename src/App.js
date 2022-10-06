import React from "react";
import Greetings from "./Components/greeting.js";
import Forms from "./Components/form.js";
import UserProfileCard from "./Components/ProfileCard.js";
import Click from "./Components/increment.js";
import MouseOver from "./Components/mouseover.js";

function App() {
  return (
    <>
      <section className="main-page">
        <Greetings />
        <MouseOver />
        <UserProfileCard />
      </section>

      <section>
        <Click />
      </section>

      <section>
        <Forms />
      </section>
    </>
  );
}
export default App;
