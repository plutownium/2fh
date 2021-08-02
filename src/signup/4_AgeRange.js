import React from "react";

import Base from "./Base";

function AgeSelect(props) {
  function generateAges() {
    const arr = [];

    const startAge = 18;
    const endAge = 65;

    for (let i = startAge; i >= endAge; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  }

  return (
    <div>
      <div>
        <select onChange={(event) => props.bottomEnd(event)}>
          {generateAges()}
        </select>
      </div>
      <div>
        <p>to</p>
      </div>
      <div>
        <select onChange={(event) => props.upperEnd(event)}>
          {generateAges()}
        </select>
      </div>
    </div>
  );
}

function AgeRange() {
  const [lowEnd, setLowEnd] = useState(null);
  const [highEnd, setHighEnd] = useState(null);

  function bottomEnd(input) {
    setLowEnd(input);
  }

  function upperEnd(input) {
    setHighEnd(input);
  }
  const title = "IDEAL PERSON";
  const question = "HOW OLD SHOULD THEY BE?";
  const menu = AgeSelect(bottomEnd, upperEnd);
  const nextPage = 5;
  const buttonText = "Finish";
  return (
    <Base
      title={title}
      question={question}
      menu={menu}
      nextPage={nextPage}
      buttonText={buttonText}
    />
  );
}

export default AgeRange;
