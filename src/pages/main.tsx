import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Introduce from 'components/main/introduce';
import Title from 'components/main/title';
import DivideZone from 'components/main/divideZone';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black'
  }
}));

const Main = () => {
  const classes = useStyles();
  let y = 0;
  
  const handleNavigation = (e: any) => {
    var elId = '';
    
    if (y < window.scrollY && 400 < window.scrollY) {
      elId = 'introduceSection';
    }
    if (window.scrollY < y && window.scrollY < 400) {
      elId = 'titleSection';
    }
    
    if (elId !== '') {
      var elTop = document.getElementById(elId)?.offsetTop;
      window.scrollTo({
        top: elTop, 
        // behavior: 'smooth'
      });
    }
    
    y = window.scrollY;
  };
  window.addEventListener("scroll", (e) => handleNavigation(e));

  return (
   <div className={classes.root}>
      <section id='titleSection'>
        <Title/>
      </section>
      <DivideZone/>
      <section id='introduceSection'>
        <Introduce/>
      </section>
   </div> 
  )
}

export default Main;