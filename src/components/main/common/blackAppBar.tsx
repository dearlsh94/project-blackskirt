import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { getTabList } from 'util/commonUtil';
import { ITab } from 'interfaces/common/ITab';
import { Divider } from '@material-ui/core';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: 'black'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  tab: {
    cursor: 'pointer'
  }
}));

const BlackAppBar = (props: Props) => {
  const classes = useStyles();
  const [tl, setTl] = useState<Array<ITab>>([]);

  useEffect(() => {
    setTl(getTabList());
  }, []);

  return (
    <HideOnScroll {...props}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          {
            tl.map((tab: ITab) => {
              return <span className={classes.tab} key={tab.key}>
                <h2>{tab.name}1</h2>
              </span>
            })
          }
        </Toolbar>
        <Divider variant="middle"/>
      </AppBar>
    </HideOnScroll>
  )
}

export default BlackAppBar;