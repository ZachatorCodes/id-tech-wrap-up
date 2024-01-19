import { useState } from "react";
import StudentForm from "./components/StudentForm";
import Header from "./components/Header";
import WrapUp from "./components/WrapUp";

function App() {
  return (
    <div className="App">
      <Header />
      <StudentForm />
    </div>
  );
}

export default App;
