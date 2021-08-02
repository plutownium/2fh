import React, { useState } from "react";

import Base from "./Base";

function BirthdatePicker() {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);

  const generateDayOptions = (month, year) => {
    // const getDaysInMonth = function (month, year) {
    //   // Here January is 1 based
    //   //Day 0 is the last day in the previous month
    //   return new Date(year, month, 0).getDate();
    //   // Here January is 0 based
    //   // return new Date(year, month+1, 0).getDate();
    // };
    // yoink from SO
    const arr = [];

    const startDay = 1;
    const endDay = 31;

    for (let i = startDay; i >= endDay; i--) {
      arr.push(<option value={i}>{i}</option>);
    }

    return arr;
  };

  const generateYearOptions = () => {
    // yoink from SO
    const arr = [];

    const startYear = 1960; // no one older than 60 is adopting a kid right?
    const endYear = new Date().getFullYear();

    for (let i = endYear; i >= startYear; i--) {
      arr.push(<option value={i}>{i}</option>);
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
      <div>
        <div>
          <select onChange={onMonthChange}>
            <option value="0">Month</option>
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
        <div onChange={onDayChange}>
          <select>{generateDayOptions(01, 2021)}</select>
        </div>
      </div>
      <div>
        <select
          className="form--dob-year"
          name="year"
          onChange={onYearChange}
          value={year}
        >
          <option value="0">Year</option>
          {generateYearOptions()}
        </select>
      </div>
    </div>
  );
}

function Birthdate() {
  const title = "ABOUT YOU";
  const question = "WHEN WERE YOU BORN?";
  const menu = BirthdatePicker();
  const nextPage = 3;
  const buttonText = "NEXT";
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
