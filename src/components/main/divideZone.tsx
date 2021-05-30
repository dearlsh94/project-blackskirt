import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black',
    height: '20px',
    '@media (min-width:786px)': {
      height: '50px'
    }
  }
}));

const DivideZone = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}></div>
  )
}

export default DivideZone;