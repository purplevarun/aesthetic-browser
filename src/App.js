import { Router } from "@material-ui/icons";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        {/*Home Page*/}
        {/*Search Results Page*/}
        <Home />
      </Router>
    </div>
  );
}

export default App;
