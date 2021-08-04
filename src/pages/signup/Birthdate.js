import React, { useState } from "react";

import Base from "./Base";

function BirthdatePicker(setYear, setMonth, setDay, year, month, day) {
  const generateDayOptions = (month, year) => {
    console.log("asdfas");
    // yoink from SO
    const arr = [];

    const startDay = 1;
    const endDay = 31;

    for (let i = startDay; i <= endDay; i++) {
      console.log("EEEEEEEEe");
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };

  const generateYearOptions = () => {
    // yoink from SO
    const arr = [];

    const startYear = 1960; // no one older than 60 is adopting a kid right?
    const endYear = new Date().getFullYear();

    for (let i = endYear; i >= startYear; i--) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };

  const onYearChange = (event) => {
    setYear(event.target.value);
  };

  const onMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const onDayChange = (event) => {
    setDay(event.target.value);
  };

  // TODO: pass mdy up to global state so it can display in profile. LOW PRIORITY

  return (
    <div>
      <div id="birthday-top-cont" className="d-flex justify-content-between">
        <div className="width-50 mr-4">
          <select
            className="mr-4 menu-styling bday-menu-h w-100 signup-input-height signup-sml-height-adjust"
            onChange={onMonthChange}
          >
            <option value="0">MONTH</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="width-50 ml-4" onChange={onDayChange}>
          <select className="menu-styling bday-menu-h w-100 signup-input-height ml-4 signup-sml-height-adjust">
            <option value="0">DAY</option>
            {generateDayOptions(1, 2021)}
          </select>
        </div>
      </div>
      <div>
        <select
          className="form--dob-year menu-styling bday-menu-h w-100 signup-input-height signup-sml-height-adjust"
          name="year"
          onChange={onYearChange}
          value={"YEAR"}
        >
          <option value="0">YEAR</option>
          {generateYearOptions()}
        </select>
      </div>
    </div>
  );
}

function Birthdate() {
  const [year, setYear] = useState(2021);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const title = "ABOUT YOU";
  const question = "WHEN WERE YOU BORN?";
  const menu = BirthdatePicker(setYear, setMonth, setDay, year, month, day);
  const nextPage = 3;
  const buttonText = "NEXT";
  // const valuesToPass = month + day + year; // fixme
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

export default Birthdate;
