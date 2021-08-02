import React from "react";

function Card(headline, subtitle, paragraph) {
  return (
    <div>
      <div>
        <h3>{headline}</h3>
      </div>
      <div>
        <p>{subtitle}</p>{" "}
        <button>
          <img alt="arrow" />
        </button>
      </div>
      <br />
      <div>
        <p>{paragraph}</p>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default Card;
