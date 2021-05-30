import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: '90vh',
    backgroundColor: 'black',
    padding: '10px',

    '@media (min-width:786px)': {
      padding: '30px'
    }
  },
  text: {
    color: 'white',
  },
  h1: {
    fontSize: '30px',

    '@media (min-width:786px)': {
      fontSize: '40px'
    }
  },
  h3: {
    fontSize: '20px',

    '@media (min-width:786px)': {
      fontSize: '24px'
    }
  }
}));

const Introduce = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={`${classes.text} ${classes.h1}`}>We Are</h1>
      <span className={`${classes.text} ${classes.h3}`}>
        검정치마단은 '검정치마 음악을 좋아하는 사람들은 다 취향이 비슷하지 않을까?...' 하는 마음으로 열린 클럽하우스의 작은 라디오 입니다.
      </span>
    </div>
  )
}

export default Introduce;