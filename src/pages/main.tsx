import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: 'black',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '125%',
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
   <div className={classes.root}>
      <div className={classes.title}>
        BlackSkirtly Radio
      </div>
   </div> 
  )
}

export default Main;