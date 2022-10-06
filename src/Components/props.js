import React from "react";

export default function Extra({ data }) {
  const { mentor, profile, article } = data;
  return (
    <>
      <div className="info">
        {`MENTOR: ${mentor}`}
      </div>

      <div className="info">
      {`PROFILE: ${profile}`}
      </div>

      <div className="info">
      {`ARTICLE: ${article}`}
      </div>
    </>
  );
}
