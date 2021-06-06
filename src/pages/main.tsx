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
    width: '80vw',
    alignItems: 'cneter'
  },
  section: {
    width: '100vw',
    height: '100vh',
    scrollSnapAlign: 'start',
    overflowY: 'hidden',
    '& h1, h2, h3, h4, h5, h6': {
      color: 'white'
    },
    '& span': {
      color: 'white'
    }
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
      <body className={classes.body}>
        <section id='titleSection' className={classes.section}>
          <Title />
        </section>
        <DivideZone />
        <section id='introduceSection' className={classes.section}>
          <Introduce />
        </section>
        <section id='outlinkSection' className={classes.section}>
          <Outlink />
        </section>
      </body>
    </div>
  )
}

export default Main;