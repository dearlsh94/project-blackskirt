import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',

    '@media (min-width:786px)': {
      padding: '30px'
    }
  },
  iconBlock: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    '& h5': {
      margin: '0',
      marginTop: '10px'
    }
  },
  iconWrapper: {
    cursor: 'pointer'
  },
  icon: {
    color: 'white',
    fontSize: 30,
    paddingLeft: '30px',
    paddingRight: '30px',
  }
}));

const Outlink = () => {
  const classes = useStyles();

  const openLink = (to: string) => {
    console.log(to);
  }

  return (
    <div className={classes.root}>
      <h1>We Here</h1>
      <div className={classes.iconBlock}>
        <span className={classes.iconWrapper} onClick={() => openLink('house')}>
          <HomeIcon className={classes.icon}/>
          <h5>House</h5>
        </span>
        <span className={classes.iconWrapper} onClick={() => openLink('insta')}>
          <InstagramIcon className={classes.icon}/>
          <h5>Insta</h5>
        </span>
        <span className={classes.iconWrapper} onClick={() => openLink('maily')}>
          <MailOutlineIcon className={classes.icon}/>
          <h5>Maily</h5>
        </span>
        <span className={classes.iconWrapper} onClick={() => openLink('talk')}>
          <MessageIcon className={classes.icon}/>
          <h5>Talk</h5>
        </span>
      </div>
    </div>
  );
}

export default Outlink;