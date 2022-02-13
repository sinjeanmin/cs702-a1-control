import React from "react";
import Form from './components/Form';
import Instruction from './components/Instruction';
import ResizeableLayout from './components/ResizeableLayout';

import './App.css';

function App() {
  const [questions, setQuestions] = React.useState([]);

  return (
    <div className="App">
      <Instruction/>
      <Form questionsHandler={setQuestions} />
      <ResizeableLayout questions={questions} />
    </div>
  );
}

export default App;
