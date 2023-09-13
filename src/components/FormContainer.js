import React, { useState } from "react";

const FormContainer = (props) => {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState("");
  const [enteredYearlyContribution, setEnteredYearlyContribution] = useState("");
  const [enteredExpectedReturn, setEnteredExpectedReturn] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");

  const currentSavingsChangeHandler = (e) => {
    setEnteredCurrentSavings(e.target.value);
  };
  const yearlyContributionChangeHandler = (e) => {
    setEnteredYearlyContribution(e.target.value);
  };
  const expectedReturnChangeHandler = (e) => {
    setEnteredExpectedReturn(e.target.value);
  };
  const durationChangeHandler = (e) => {
    setEnteredDuration(e.target.value);
  };

  const calculateHandler = (event) => {
    event.preventDefault();
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const userInputs = {
      currentSavings: +enteredCurrentSavings,
      yearlyContribution: +enteredYearlyContribution,
      expectedReturn: +enteredExpectedReturn / 100,
      duration: +enteredDuration,
    };

    props.onSaveUserInputs(userInputs);
  };

  const resetHandler = () => {
    setEnteredCurrentSavings('');
    setEnteredYearlyContribution('');
    setEnteredExpectedReturn('');
    setEnteredDuration('');
  }

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            value={enteredCurrentSavings}
            onChange={currentSavingsChangeHandler}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={enteredYearlyContribution}
            onChange={yearlyContributionChangeHandler}
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            value={enteredExpectedReturn}
            onChange={expectedReturnChangeHandler}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            value={enteredDuration}
            onChange={durationChangeHandler}
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormContainer;
