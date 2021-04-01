import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FosterRequestTable from './FosterRequestTable';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "10px 100px 10px 90px",
  },
  backButton: {
    marginTop: "20px",
  },
  profileImage: {
    width: drawerWidth,
  },
  paper: {
    width: "96%",
    display: "inline-block",
    padding: "20px",
    height: "100%",
  },
  center: {
    textAlign: "center",
  },
  alignRight: {
    textAlign: "right",
  },
  photoRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "100%",
  },
  imageTile: {
    border: " 3px solid lightgrey",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  label: {
    color: "darkgray",
  },
  margin: {
    marginTop: "0",
  },
  margin5: {
    marginTop: "20px",
  },
}));

const tileData = [
  {
    img: "/static/images/details/dog.jpeg",
  },
  {
    img: "/static/images/details/dog2.jpeg",
  },
  {
    img: "/static/images/details/dog3.jpeg",
  },
  {
    img: "/static/images/details/dog4.jpeg",
  },
];


const FormRow = (props) => {
  return (
    <Grid className={props.class} container item xs={12}>
      <Grid item xs={3}>
        {props.label && (
          <Typography variant="subtitle1">{props.label}:</Typography>
        )}
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{props.value}</Typography>
      </Grid>
    </Grid>
  );
};

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



export const ViewFosterRequestForMyPet = () => {
  const classes = useStyles();
  const pathname = window.location.pathname;
  const [open, setOpen] = React.useState(false);
 
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    
    <Grid
        container
        className={classes.margin}
        justify="flex-start"
        spacing={5}
      >
     
      <Grid container item xs={4}>
          <div className={classes.photoRoot}>
            <GridList cellHeight={180} className={classes.gridList}>
              <img src="/static/images/details/dog.jpeg" alt={tileData.title} />
            </GridList>
          </div>
        </Grid>

        <Grid container item xs={8}>
            <Grid container item xs={3}>
             <FormRow label="Name" value="Bruno" />
            </Grid>
            <Grid container item xs={5}>
            <div className={classes.alignRight}>
            <Button
                  variant="contained"
                  color="primary"
                  className={classes.sendButton}
                  onClick={handleOpen}
                  href = "/fosterRequestTable"
                  size="medium"
                >
                  View Foster Requests
            </Button>
            
            {/* <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}>
                  <DialogContent dividers>
                    <div className={classes.flex}>
                      {!pathname.includes("/create") && (
                        <div>
                          <Button
                            href="/"
                            variant="contained"
                            color="primary"
                            className={classes.backButton}
                            startIcon={<ArrowBackIosIcon />}
                          >
                            Back
                          </Button>
                        </div>
                      )}
                    </div>
                    <Grid container item md={12}>
                      <FosterRequestTable />                    
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      autoFocus
                      onClick={handleClose}
                      color="primary"
                      href="/"
                    >
                      Okay
                    </Button>
                  </DialogActions>
                </Dialog> */}

              </div>
            </Grid>
        </Grid>

    </Grid>
  );

  // return (
  //   <>
  //     <Grid
  //       container
  //       className={classes.margin}
  //       justify="flex-start"
  //       spacing={5}
  //     >
  //       <Grid container item xs={4}>
  //         <div className={classes.photoRoot}>
  //           <GridList cellHeight={180} className={classes.gridList}>
  //             <img src="/static/images/details/dog.jpeg" alt={tileData.title} />
  //           </GridList>
  //         </div>
  //       </Grid>
  //       <Grid container item xs={8}>
  //         <Grid container item xs={6}>
  //           <FormRow label="Name" value="Bruno" />
  //           {/* <FormRow label="Category" value="Dog" />
  //           <FormRow label="Breed" value="Retriever" />
  //           <FormRow label="Gender" value="Male" /> */}
  //         </Grid>
  //         <Grid container item xs={6}>
  //             <div className={classes.alignRight}>
  //               <Button
  //                 variant="contained"
  //                 color="primary"
  //                 className={classes.sendButton}
  //                 onClick={handleOpen}
  //                 size="medium"
  //               >
  //                 View Foster Requests
  //               </Button>
  //               <Dialog
  //                 onClose={handleClose}
  //                 aria-labelledby="customized-dialog-title"
  //                 open={open}
  //               >
  //                 <DialogContent dividers>
  //                   <div className={classes.flex}>
  //                     {!pathname.includes("/create") && (
  //                       <div>
  //                         <Button
  //                           href="/"
  //                           variant="contained"
  //                           color="primary"
  //                           className={classes.backButton}
  //                           startIcon={<ArrowBackIosIcon />}
  //                         >
  //                           Back
  //                         </Button>
  //                       </div>
  //                     )}
  //                   </div>
  //                   <Grid container item md={12}>
  //                     <Grid container item md={3}>
  //                       Fosterer's Name
  //                     </Grid>
  //                     <Grid container item md={3}>
  //                       Rating
  //                     </Grid>
  //                     <Grid container item md={3}>
  //                       Message to Owner
  //                     </Grid>
  //                     <Grid container item md={3}>
  //                       Actions
  //                     </Grid> 
  //                   </Grid>
  //                 </DialogContent>
  //                 <DialogActions>
  //                   <Button
  //                     autoFocus
  //                     onClick={handleClose}
  //                     color="primary"
  //                     href="/"
  //                   >
  //                     Okay
  //                   </Button>
  //                 </DialogActions>
  //               </Dialog>
  //             </div>
  //           </Grid>
  //           {/* <FormRow label="Age" value="5 months" />
  //           <FormRow
  //             class={classes.margin5}
  //             label="Duration"
  //             value="May 21, 2021 to May 29, 2021"
  //           />
  //           <FormRow label="Location" value="11 Tetlow Street" />
  //           <FormRow value="Boston, MA 02115" /> */}
  //         {/* </Grid> */}
  //         {/* <Grid container item xs={6}> */}
  //           {/* <FormRow label="Status" value="Approved" /> */}
  //         {/* </Grid> */}
  //         {/* <Grid container item xs={8}>
  //           <Grid container item xs={6}>
  //             <div className={classes.alignRight}>
  //               <Button
  //                 variant="contained"
  //                 color="secondary"
  //                 className={classes.sendButton}
  //                 onClick={handleOpen}
  //                 size="medium"
  //               >
  //                 Withdraw Foster Request
  //               </Button>
  //               <Dialog
  //                 onClose={handleClose}
  //                 aria-labelledby="customized-dialog-title"
  //                 open={open}
  //               >
  //                 <DialogContent dividers>
  //                   <Typography gutterBottom>
  //                     We are sorry to know that you withdrew your foster request!
  //                   </Typography>
  //                 </DialogContent>
  //                 <DialogActions>
  //                   <Button
  //                     autoFocus
  //                     onClick={handleClose}
  //                     color="primary"
  //                     href="/"
  //                   >
  //                     Okay
  //                   </Button>
  //                 </DialogActions>
  //               </Dialog>
  //             </div>
  //           </Grid>

  //           <Grid container item xs={6}>
  //             <div className={classes.alignRight}>
  //               <Button
  //                 variant="contained"
  //                 color="primary"
  //                 className={classes.sendButton}
  //                 onClick={handleOpenOwnerDetails}
  //                 size="medium"
  //               >
  //                 View Owner details
  //               </Button>
  //               <Dialog
  //                 onClose={handleCloseOwnerDetails}
  //                 aria-labelledby="customized-dialog-title"
  //                 open={openOwnerDetails}
  //               >
  //                 <DialogContent dividers>
  //                   <Typography gutterBottom>
  //                     Hurray! The owner has accepted your foster request. Please get in touch with the owner for picking up and dropping off the pet.
  //                     </Typography>
  //                     <Grid container item xs={10}>
  //                     <Typography gutterBottom>
  //                         Owner Details:
  //                         </Typography>
  //                       <FormRow label="Name" value="Alex" />
  //                       <FormRow label="Location" value="3 Filmore St. SF, 41202" />
  //                       <FormRow label="Phone number" value="213-456-7890" />
  //                       <FormRow label="Email" value="alex@g.com" />
  //                       <Typography gutterBottom> Happy Fostering! </Typography>
  //                   </Grid>
  //                 </DialogContent>
  //                 <DialogActions>
  //                   <Button
  //                     autoFocus
  //                     onClick={handleCloseOwnerDetails}
  //                     color="primary"
  //                     href="/viewFosterRequest"
  //                   >
  //                     Okay
  //                   </Button>
  //                 </DialogActions>
  //               </Dialog>
  //             </div>
  //           </Grid>
  //         </Grid> */}

  //       </Grid>
  //     </Grid>
  //     {/* ******************* 2nd pet *********************************** */}
  //     <Grid
  //       container
  //       className={classes.margin}
  //       justify="flex-start"
  //       spacing={5}
  //     >
  //       <Grid container item xs={4}>
  //         <div className={classes.photoRoot}>
  //           <GridList cellHeight={180} className={classes.gridList}>
  //             <img
  //               src="/static/images/details/dog2.jpeg"
  //               alt={tileData.title}
  //             />
  //           </GridList>
  //         </div>
  //       </Grid>
  //       <Grid container item xs={8}>
  //         <Grid container item xs={6}>
  //           <FormRow label="Name" value="Goofy" />
  //           <FormRow label="Category" value="Dog" />
  //           <FormRow label="Breed" value="Retriever" />
  //           <FormRow label="Gender" value="Male" />
  //         </Grid>
  //         <Grid container item xs={6}>
  //           <FormRow label="Age" value="2 months" />
  //           <FormRow
  //             class={classes.margin5}
  //             label="Duration"
  //             value="April 20, 2021 to June 20, 2021"
  //           />
  //           <FormRow label="Location" value="Caesars" />
  //           <FormRow value="Atlantic City, NJ 08401" />
  //         </Grid>
  //         <Grid container item xs={6}>
  //           <FormRow label="Status" value="Decision Pending" />
  //         </Grid>
  //         <Grid container item xs={8}>
  //           <Grid container item xs={6}>
  //             <div className={classes.alignRight}>
  //               <Button
  //                 variant="contained"
  //                 color="secondary"
  //                 className={classes.sendButton}
  //                 onClick={handleOpen}
  //                 size="medium"
  //               >
  //                 Withdraw Foster Request
  //               </Button>
  //             </div>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //     {/* ************************* 3rd pet ****************************** */}
  //     <Grid
  //       container
  //       className={classes.margin}
  //       justify="flex-start"
  //       spacing={5}
  //     >
  //       <Grid container item xs={4}>
  //         <div className={classes.photoRoot}>
  //           <GridList cellHeight={180} className={classes.gridList}>
  //             <img src="/static/images/details/cat.jpeg" alt={tileData.title} />
  //           </GridList>
  //         </div>
  //       </Grid>
  //       <Grid container item xs={8}>
  //         <Grid container item xs={6}>
  //           <FormRow label="Name" value="Bella" />
  //           <FormRow label="Category" value="Cat" />
  //           <FormRow label="Breed" value="American Curl" />
  //           <FormRow label="Gender" value="Female" />
  //         </Grid>
  //         <Grid container item xs={6}>
  //           <FormRow label="Age" value="2 months" />
  //           <FormRow
  //             class={classes.margin5}
  //             label="Duration"
  //             value="June 10, 2021 to June 20, 2021"
  //           />
  //           <FormRow label="Location" value="Longwood Apts" />
  //           <FormRow value="Boston, MA 02120" />
  //         </Grid>
  //         <Grid container item xs={6}>
  //           <FormRow label="Status" value="Reject" />
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </>
  // );
};

ViewFosterRequestForMyPet.propTypes = {};

export default ViewFosterRequestForMyPet;
