import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',

    '@media (min-width:786px)': {
      padding: '30px'
    }
  }
}));

const Introduce = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>We Are</h1>
      <h3>
        검정치마단은 '검정치마 음악을 좋아하는 사람들은 다 취향이 비슷하지 않을까?...' 하는 마음으로 열린 클럽하우스의 작은 라디오 입니다.
      </h3>
    </div>
  )
}

export default Introduce;