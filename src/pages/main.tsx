import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Introduce from 'components/main/introduce';
import Title from 'components/main/title';
import DivideZone from 'components/main/divideZone';
import Outlink from 'components/main/outlink';
import BlackAppBar from 'components/main/common/blackAppBar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black',
    scrollSnapType: 'y mandatory',
    overflowY: 'hidden'
  },
  body: {
    width: '100vw',
    '& h1, h2, h3, h4, h5, h6': {
      color: 'white'
    },
    '& span': {
      color: 'white'
    }
  },
  section: {
    height: '100vh',
    overflowY: 'hidden',
    textAlign: 'center',
  },
  subSection: {
    height: '30vh',
    paddingTop: '3vh',
    paddingBottom: '3vh',
    overflowY: 'hidden',
    textAlign: 'center'
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <BlackAppBar>
          <div/>
        </BlackAppBar>
      </header>
      <div className={classes.body}>
        <section id='titleSection' className={classes.section}>
          <Title />
        </section>
        <DivideZone />
        <section id='introduceSection' className={classes.section}>
          <div className={classes.subSection}>
            <Introduce />
          </div>
          <div className={classes.subSection}>
            <Outlink />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Main;