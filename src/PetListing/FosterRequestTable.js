import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Button, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

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


const columns = [
    { id: 'name', label: 'Fosterer\'s Name', minWidth: 170 },
    { id: 'rating', label: 'Rating', minWidth: 100 },
    {
      id: 'message',
      label: 'Message from the Fosterer',
      minWidth: 170,
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'action',
      label: 'Actions',
      minWidth: 170
    }
  ];
  
  function createData(name, rating, message, action) {
    return { name, rating, message, action };
  }
  
  
  
  const rows = [
    createData('Jackson', '4.9/5.0', "I love dogs and I have one myself - a Retriever. He's good with other dogs, hence I'm willing to foster your pet as well.", 
    "hello"
    ),
    createData('John', '4.2/5.0', "I grew up with 3 dogs, 2 cats and a horse. I'm very good with pets.",
    "hello" 
    ),
   
  ];
  

export const FosterRequestTable = ()=> {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return(
    <Grid
        container
        className={classes.margin}
        justify="flex-start"
        spacing={5}
      >
        <Grid container item xs={4}>
            <div>
              <Button
                variant="contained"
                color="primary"
                href="/viewFosterRequestForMyPet"
                className={classes.backButton}
                startIcon={<ArrowBackIosIcon />}
              >
                Back
              </Button>
            </div>
        </Grid>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.rating}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      </Grid>
    );
  }
  export default FosterRequestTable;
  