import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConditionReport from "./pages/ConditionReport";
import HouseProfile from "./pages/HouseProfile";
import Home from "./pages/Home";
import Nav from "./components/Nav";

// import NavTabs from "./components/NavTabs";

// function App() {
//   return (

//     <div>
//       <Nav />
//       <Home />
//     </div>

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path={["/conditionreport"]}>
            <ConditionReport />
          </Route>
          <Route exact path="/houseprofile">
            <HouseProfile />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}




export default App;
