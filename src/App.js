import Header from "./components/Header";
import FormContainer from "./components/FormContainer";
import ResultsContainer from "./components/ResultsContainer";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const saveUserInputsHandler = (userInputs) => {
    setUserData(userInputs);
  };
  return (
    <div>
      <Header />
      <FormContainer onSaveUserInputs={saveUserInputsHandler} />
      <ResultsContainer userInputsList={userData} />
    </div>
  );
}

export default App;
