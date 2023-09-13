import Header from "./components/Header";
import FormContainer from "./components/FormContainer";
import ResultsContainer from "./components/ResultsContainer";
import { useState } from "react";

function App() {
  const [savedUserInputs, setSavedUserInputs] = useState("");
  const saveUserInputsHandler = (userInputs) => {
    const userInputsData = {
      ...userInputs,
      id: Math.random().toString()
    }
    setSavedUserInputs(userInputsData);
  };

  return (
    <div>
      <Header />
      <FormContainer onSaveUserInputs={saveUserInputsHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultsContainer userInputsList={savedUserInputs} />
    </div>
  );
}

export default App;
