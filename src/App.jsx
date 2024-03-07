import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/HomePage";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
