import React from "react";
import "./App.css";
import { useValueStore } from "../Store/useValueStore";
import { ToastContainer } from "react-toastify";


function App() {
  const { SetValue } = useValueStore();

  const handleButtonClick = (buttonValue) => {
    const newValue = { value: buttonValue };
    SetValue(newValue);
  };

  return (
    <div className="app-container">
      <h1>Welcome to the React App</h1>
      <p>This is a simple React application for put a value</p>
      <div className="button-container">
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
