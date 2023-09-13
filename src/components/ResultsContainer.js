import Result from "./Result";

const ResultsContainer = (props) => {
  const yearlyData = []; // per-year results
  let totalInterest = 0;

  // let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
  // const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
  // const expectedReturn = +userInput["expected-return"] / 100;
  // const duration = +userInput["duration"];

  props.userInputsList.map((data) => {
    for (let i = 0; i < data.duration; i++) {
      const yearlyInterest = data.currentSavings * data.expectedReturn;
      data.currentSavings += yearlyInterest + data.yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: data.currentSavings,
        totalInterest: totalInterest,
        yearlyContribution: data.yearlyContribution,
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
        {yearlyData.map((stats) => {
          <Result
            year={stats.year}
            yearlyInterest={stats.yearlyInterest}
            savingsEndOfYear={stats.savingsEndOfYear}
            totalInterest={stats.totalInterest}
            yearlyContribution={stats.yearlyContribution}
          />;
        })}
      </tbody>
    </table>
  );
};

export default ResultsContainer;
