import { render } from '@testing-library/react';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',

    '@media (min-width:786px)': {
      padding: '30px'
    }
  },
  h1: {
    fontSize: '30px',

    '@media (min-width:786px)': {
      fontSize: '40px'
    }
  },
}));

const Outlink = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>We Here</h1>
      outlink
    </div>
  );
}

export default Outlink;