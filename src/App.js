import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // style={{ "text-align": "center" }}

  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");

  const toggleState = (colour) => {
    let color = colour;
    console.log(color);

    if (color === "reset") {
      setMode("light");
      showAlert("Background Changed", "warning");
    } else {
      if (color === "green") {
        setMode("green");
        showAlert("Background Changed", "warning");
      } else if (color === "blue") {
        setMode("blue");
        showAlert("Background Changed", "warning");
      } else if (color === "yellow") {
        setMode("yellow");
        showAlert("Background Changed", "warning");
      } else {
        if (mode === "dark") {
          setMode("light");
          showAlert("Dark mode disabled", "success");
        } else {
          setMode("dark");
          showAlert("Dark mode enabled", "warning");
        }
      }
    }
  };

  return (
    <>
      {/* <Navbar></Navbar>  when we will not pass any value tot he props, then default values will be rendered */}

      {/* <Router> */}
      <Navbar
        title={"TextMod"}
        toggleState={toggleState}
        mode={mode}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/"> */}
        <TextForm
          heading={"Enter your text below to analyze"}
          showAlert={showAlert}
        />
        {/* </Route> */}

        {/* <Route exact path="/about">
              <About toggleState={toggleState} mode={mode} />
            </Route> */}

        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
