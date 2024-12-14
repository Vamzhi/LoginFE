import React from "react";
import "./styles/App.css";
import LoginUI from "./components/Login/LoginUI";
import Illustration from "./components/Shared/Illustration";

const App = () => {
  return (
    <div className="App">
      <div className="left-section">
          <Illustration />
        </div>
      <div className="container">
        <div className="right-section">
          <LoginUI />
        </div>
      </div>
    </div>
  );
};

export default App;