import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import PetSearch from "./PetSearch/PetSearch";
import CreatePetListing from "./CreatePetListing";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import SendFosterRequest from "./PetSearch/SendFosterRequest";
import PetSearchDetails from "./PetSearch/petSearchDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
            <Route path="/PetSearchDetails">
              <PetSearchDetails />
            </Route>
            <Route path="/SendFosterRequest">
              <SendFosterRequest />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
