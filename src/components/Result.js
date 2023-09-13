const Result = (props) => {
    return (
        <tr>
          <td>{props.year}</td>
          <td>{props.savingsEndOfYear}</td>
          <td>{props.yearlyInterest}</td>
          <td>{props.totalInterest}</td>
          <td>{props.yearlyContribution}</td>
        </tr>
    )
}

export default Result;