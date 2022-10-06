import React from "react";
import SkillsList from "./skillList";
import Extra from "./props";

function UserProfileCard() {
  return (
    <div className="card">
      <section>
        <img
          className="card-image"
          src="TitiRoseCoder-compressed.jpg"
          alt="Avatar"
          style={{ width: 100 }}
        />

        <div className="card-name">
          <div className="profile-name">Titi Oduwole</div>
          <SkillsList />
        </div>
      </section>

      <section className="info-container">
        <Extra
          data={{
            mentor: "Arit Developer",
            profile: "github.com/titiodus",
            article: "https://stories.ourtimefortech.org/start",
          }}
        />
      </section>
    </div>
  );
}

export default UserProfileCard;
