import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PetSearch from "./PetSearch";
import CreatePetListing from "./CreatePetListing";
import ButtonAppBar from "./ButtonAppBar";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="App">
        <ButtonAppBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <PetSearch />
            </Route>
            <Route path="/create">
              <CreatePetListing />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
