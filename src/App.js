import Header from "./components/Header";
import FormContainer from "./components/FormContainer";
import ResultsContainer from "./components/ResultsContainer";

function App() {
  return (
    <div>
      <Header />
      <FormContainer />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultsContainer />
    </div>
  );
}

export default App;
