import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/index";
import PetSearch from "./PetSearch/PetSearch";
import CreatePetListing from "./PetListing/CreatePetListing";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import SendFosterRequest from "./PetSearch/SendFosterRequest";
import PetSearchDetails from "./PetSearch/petSearchDetails";
import FosterHistory from "./FosterHistory";
import OwnerDetails from "./OwnerDetails";

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
            <Route path="/fosterHistory">
              <FosterHistory />
            </Route>
            <Route path="/ownerDetails">
              <OwnerDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
