import Result from "./Result";

const ResultsContainer = (props) => {
  const yearlyData = []; // per-year results

  let currentSavings = props.userInputsList.currentSavings;
  const yearlyContribution = props.userInputsList.yearlyContribution;
  const expectedReturn = props.userInputsList.expectedReturn;
  const duration = props.userInputsList.duration;
  const initialInvestment = props.userInputsList.currentSavings;

  if (props.userInputsList.length === 0) {
    return <p>No investment calculated yet.</p>;
  } else {
    for (let i = 0; i < duration; i++) {
      const yearlyInterest =
        currentSavings * expectedReturn;
        currentSavings +=
        yearlyInterest + yearlyContribution;
      yearlyData.push({
        id: Math.random().toString(),
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialInvestment: initialInvestment,
      });
    }
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
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsContainer;
