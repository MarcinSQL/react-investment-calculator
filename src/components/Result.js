const Result = (props) => {
  return (
    <tr>
      <td>{props.year}</td>
      <td>${props.savingsEndOfYear}</td>
      <td>${props.yearlyInterest}</td>
      <td>
        $
        {props.savingsEndOfYear -
          props.initialInvestment -
          props.yearlyContribution * props.year}
      </td>
      <td>
        ${props.initialInvestment + props.yearlyContribution * props.year}
      </td>
    </tr>
  );
};

export default Result;
