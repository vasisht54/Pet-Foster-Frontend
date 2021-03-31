import {makeStyles} from "@material-ui/core/styles";
import OptionsCard from "./OptionsCard";
// import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minHeight: "88.5vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/static/images/background.png"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  },
  optionsWrapper: {
    // display: 'flex',
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="optionsWrapper">
        <OptionsCard
          title="Foster A Pet"
          description="Search from a wide range of pets that includes dogs, cats, fishes, hamsters and more!"
          image="/static/images/paw.png"
          route="/search"
        />
        <OptionsCard
          title="Create a Pet Listing"
          description="Create a listing for your pet to let someone take care of your pet"
          image="/static/images/paw.png"
          route="/create"
        />
      </div>

      {/* <h4>Home</h4>
      <div>
        <Link to='/search'>Meet Pets</Link>
      </div>
      <div>
        <Link to='/create'>Create a Pet Listing</Link>
      </div> */}
    </div>
  );
};

export default Home;
