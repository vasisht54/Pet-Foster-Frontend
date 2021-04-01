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
import ViewFosterRequest from "./PetSearch/viewFosterRequest";
import ViewFosterRequestForMyPet from "./PetListing/ViewFosterRequestForMyPet";
import FosterRequestTable from "./PetListing/FosterRequestTable";
import FostererProfile from "./PetListing/FostererProfile";

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
            <Route path="/ViewFosterRequest">
              <ViewFosterRequest />
            </Route>
            <Route path="/ViewFosterRequestForMyPet">
              <ViewFosterRequestForMyPet />
            </Route>
            <Route path="/FosterRequestTable">
              <FosterRequestTable />
            </Route>
            <Route path="/fostererProfile">
              <FostererProfile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
