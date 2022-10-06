import React from "react";

function SkillsList() {
  const skillNames = ["HTML", "CSS", "JavaScript", "Reactjs"];

  return (
    <div>
      {skillNames.map((item) => (
        <li className="skill" key={item}>
          {item}
        </li>
      ))}
    </div>
  );
}

export default SkillsList