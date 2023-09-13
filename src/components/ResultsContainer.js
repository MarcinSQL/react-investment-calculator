import Result from "./Result";

const ResultsContainer = (props) => {
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
        {props.userInputsList.map((stats) => {
          <Result
            currentSavings={stats.currentSavings}
            yearlyContribution={stats.yearlyContribution}
            expectedReturn={stats.expectedReturn}
            duration={stats.duration}
          />;
        })}
      </tbody>
    </table>
  );
};

export default ResultsContainer;
