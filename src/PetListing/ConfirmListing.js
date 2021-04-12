import React from 'react';

import { CatListing } from './CatListing';
 


const ConfirmListing = () => {
 

    return (
        <div style={{padding: "0 20px"}}>
            <CatListing />
        </div>
    );
}
 
ConfirmListing.propTypes = {};
 
export default ConfirmListing;


// const PetSearchDetails = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper} elevation={3}>
//         <PetDetails />
//       </Paper>
//     </div>
//   );
// };
