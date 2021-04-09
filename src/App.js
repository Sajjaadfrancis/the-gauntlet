import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import State from "./components/State";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route path="/state" component={State} />
    </Router>
  );
}

export default App;
