import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Nav />
          <Route path="/Books" pages={Books}>
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
