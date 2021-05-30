import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Introduce from 'components/main/introduce';
import Title from 'components/main/title';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black'
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
   <div className={classes.root}>
      <Title/>
   </div> 
  )
}

export default Main;