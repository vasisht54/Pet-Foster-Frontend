import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h4>Home</h4>
      <div>
        <Link to="/search">Meet Pets</Link>
      </div>
      <div>
        <Link to="/create">Create a Pet Listing</Link>
      </div>
    </div>
  );
};

export default Home;
