import Result from "./Result";

const ResultsContainer = (props) => {
  const yearlyData = []; // per-year results

  // let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
  // const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
  // const expectedReturn = +userInput["expected-return"] / 100;
  // const duration = +userInput["duration"];

  props.userInputsList.map((data) => {
    for (let i = 0; i < data.duration; i++) {
      const initialInvestment = data.currentSavings;
      const yearlyInterest = data.currentSavings * data.expectedReturn;
      data.currentSavings += yearlyInterest + data.yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        id: Math.random().toString(),
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: data.currentSavings,
        yearlyContribution: data.yearlyContribution,
        initialInvestment: initialInvestment,
      });
    }
  });

  if (props.userInputsList.length === 0) {
    return <p>No investment calculated yet.</p>;
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((item) => {
          return (
          <Result
            key={item.id}
            year={item.year}
            yearlyInterest={item.yearlyInterest}
            initialInvestment={item.initialInvestment}
            savingsEndOfYear={item.savingsEndOfYear}
            yearlyContribution={item.yearlyContribution}
          />);
        })}
      </tbody>
    </table>
  );
};

export default ResultsContainer;
